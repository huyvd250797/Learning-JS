//  Đối tượng `Validator`
const Validator = (options) => {
  // Khai báo object rỗng để chứa các rules
  let selectorRules = {};

  //! Khai báo biến get Element của form cần validate, form: "#form-1"
  let formElement = document.querySelector(options.form);

  //? Nếu là formElement thì...
  if (formElement) {
    // Khi submit form
    formElement.onsubmit = function (e) {
      e.preventDefault();

      let isFormInvalid = true;

      // Lặp qua các rule và vaidate
      options.rules.forEach(function (rule) {
        // và lấy inputElement
        let inputElement = formElement.querySelector(rule.selector);
        // và validate inputElement
        let isValid = validate(inputElement, rule);

        //? Nếu không có 1 phần tử không isValid
        if (!isValid) {
          // Gán isFromInvalid = false
          isFormInvalid = false;
        }
      });

      if (isFormInvalid) {
        if (typeof options.onSubmit === "function") {
          // Khai báo biến lấy tất cả input ở trạng thái enable
          // Select tất cả field có attribute là name và không có attribute là disable
          let enableInputs = formElement.querySelectorAll(
            "[name]:not([disabled]"
          );

          // enableInputs đang là nodeList, Array.form sẽ biến enableInputs thành array
          let formValues = Array.from(enableInputs).reduce(function (
            values,
            input
          ) {
            return (values[input.name] = input.value) && values;
          },
          {});

          options.onSubmit(formValues);
        }
      }
    };
    //! Xử lý lặp qua mỗi rule và xử lý
    options.rules.forEach(function (rule) {
      // Lưu lại các rules cho mỗi input

      //? Nếu là mảng
      if (Array.isArray(selectorRules[rule.selector])) {
        // push rule.test vào mảng
        selectorRules[rule.selector].push(rule.test);
      }
      //? Ngược lại không là mảng
      else {
        // gán key của object selectorRules = mảng với phần tử đầu tiên là rule.test
        selectorRules[rule.selector] = [rule.test];
      }

      // Không sử dụng document.querySelectorm, vì nếu trường hợp nhiều form cùng xài chung id sẽ lỗi
      // mà sử dụng luôn cái formElement đã khai báo ở trên để tìm chính xác form cụ thể
      let inputElement = formElement.querySelector(rule.selector);

      // Nếu inputElement is not null
      if (inputElement) {
        // Tạo hàm lắng nghe sự kiện onblur khỏi input
        inputElement.onblur = function () {
          // value: inputElement.value
          // test func: rule.test
          validate(inputElement, rule);
        };

        // Xử lý khi người dùng nhập vào input
        inputElement.oninput = function () {
          // parentElement lấy thẻ cha của inputElement và tìm đến class .form-message trong parentElement
          let errElement = inputElement.parentElement.querySelector(
            options.errSelector
          );

          // Nếu có lỗi => hiển thị rỗng
          errElement.innerText = "";

          // remove class border color
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }

  //TODO Hàm thực hiện validate
  const validate = (inputElement, rule) => {
    // parentElement lấy thẻ cha của inputElement và tìm đến class .form-message trong parentElement
    let errElement = inputElement.parentElement.querySelector(
      options.errSelector
    );

    // Khai báo biến thông báo lỗi
    let errMessage;

    // Khai báo biến chứa mảng selectorRules của input
    let rules = selectorRules[rule.selector];

    for (let i = 0; i < rules.length; i++) {
      errMessage = rules[i](inputElement.value);

      //? Nếu có thông báo lỗi break khỏi vòng lặp
      if (errMessage) break;
    }
    //? Nếu errMessage = true
    if (errMessage) {
      // Nếu có lỗi => hiển thị thông báo
      errElement.innerText = errMessage;

      // add class border color
      inputElement.parentElement.classList.add("invalid");
    }
    //? Ngược lại errMessage = false
    else {
      // Nếu có lỗi => hiển thị rỗng
      errElement.innerText = "";

      // remove class border color
      inputElement.parentElement.classList.remove("invalid");
    }

    // convert thành boolean thêm !! sẽ thành true & false
    return !errMessage;
  };
};

// Gán phương thức isRequired & isEmail = function
//  Đinh nghĩa rule

// Hàm kiểm tra người dùng đã nhập dữ liệu chưa
// Nguyên tác của rules:
// 1. Khi có lỗi => trả mess lỗi
// 2. Khi hợp lệ => không trả ra gì cả
Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    // Hàm thông báo lỗi
    test: function (value) {
      //? Nếu value is not null thì undefined, ngược lại thì báo lỗi
      // trim(): loại bỏ dấu cách để tránh người dùng nhập dấu cách vẫn tính hợp lệ
      return value.trim() ? undefined : message || "Vui lòng nhập trường này";
    },
  };
};

// Hàm kiểm tra người dùng đã nhập dữ liệu có phải là email không
Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      // Kiểm tra nếu value người dùng nhập tuân thủ regex ? undefined : thông báo lỗi
      return regex.test(value)
        ? undefined
        : message || "Vui lòng nhập email hợp lệ";
    },
  };
};

// Hàm kiểm tra độ dài password người dùng nhập
Validator.minLength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      // Kiểm tra nếu value người dùng nhập tuân thủ regex ? undefined : thông báo lỗi
      return value.length >= min
        ? undefined
        : message || `Vui lòng nhập tối thiểu ${min} ký tự`;
    },
  };
};

// Hàm confirm password
Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value == getConfirmValue()
        ? undefined
        : // Nếu có tồn tại message thì lấy message nếu không thì lấy "Giá trị xác nhận không khớp"
          message || "Giá trị xác nhận không khớp";
    },
  };
};
