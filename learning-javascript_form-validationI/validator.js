//  Đối tượng `Validator`
const Validator = (options) => {
  // Khai báo biến get Element của form cần validate, form: "#form-1"
  let formElement = document.querySelector(options.form);

  //? Nếu là formElement thì...
  if (formElement) {
    options.rules.forEach(function (rule) {
      // Không sử dụng document.querySelectorm, vì nếu trường hợp nhiều form cùng xài chung id sẽ lỗi
      // mà sử dụng luôn cái formElement đã khai báo ở trên để tìm chính xác form cụ thể
      let inputElement = formElement.querySelector(rule.selector);

      // Nếu inputElement is not null
      if (inputElement) {
        // Tạo hàm lắng nghe sự kiện onblur khỏi input
        inputElement.onblur = function () {
          //! value: inputElement.value
          //! test func: rule.test
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
    let errMessage = rule.test(inputElement.value);
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
  };
};

// Gán phương thức isRequired & isEmail = function
//  Đinh nghĩa rule

// Hàm kiểm tra người dùng đã nhập dữ liệu chưa
// Nguyên tác của rules:
// 1. Khi có lỗi => trả mess lỗi
// 2. Khi hợp lệ => không trả ra gì cả
Validator.isRequired = function (selector) {
  return {
    selector: selector,
    // Hàm thông báo lỗi
    test: function (value) {
      //? Nếu value is not null thì undefined, ngược lại thì báo lỗi
      // trim(): loại bỏ dấu cách để tránh người dùng nhập dấu cách vẫn tính hợp lệ
      return value.trim() ? undefined : "Vui lòng nhập trường này";
    },
  };
};

// Hàm kiểm tra người dùng đã nhập dữ liệu có phải là email không
Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      // Kiểm tra nếu value người dùng nhập tuân thủ regex ? undefined : thông báo lỗi
      return regex.test(value) ? undefined : "Vui lòng nhập email hợp lệ";
    },
  };
};

// Hàm kiểm tra độ dài password người dùng nhập
Validator.minLength = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      // Kiểm tra nếu value người dùng nhập tuân thủ regex ? undefined : thông báo lỗi
      return value.lenght >= min
        ? undefined
        : `Vui lòng nhập tối thiểu ${min} ký tự`;
    },
  };
};
