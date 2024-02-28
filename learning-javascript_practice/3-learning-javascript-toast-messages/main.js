// Toast function
function toast({
    title ='', 
    message ='', 
    type = 'info', 
    duration = 3000
    }) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        // Auto remove toast
        // sau khoảng thời gian, xóa toast đã ẩn
        const autoRemoveId = setTimeout(function() {
            // remove toast from main
            main.removeChild(toast)
        }, duration + 1000)


        // Lắng nghe sự kiện click
        toast.onclick = function(e) {
            // Tìm xem khi click vào có trúng vào element có class ".toast__close" hay không
            if (e.target.closest('.toast__close')) {
                // Nếu click trúng => remove toast
                main.removeChild(toast);
                // clear time out, không áp dụng hàm setTimeout bên trên nữa
                clearTimeout(autoRemoveId);
            }
        }
        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-triangle-exclamation',
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        // toFix(2) => 2 số thập phân
        // add animation
        toast.style.animation = `slideInLeft ease .7s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        // add toast to main
        main.appendChild(toast);
        
    }
}


// call function when onclick

function showSuccessToast() {
    toast({
        title: 'Thành công',
        message: 'Đã thực hiện thành công',
        type: 'success',
        duration: 3000
    })
}

function showInfoToast() {
    toast({
        title: 'Thông tin',
        message: 'Vui lòng quay lại sau ít phút!',
        type: 'info',
        duration: 3000
    })
}

function showWarningToast() {
    toast({
        title: 'Cảnh báo',
        message: 'Chức năng này đang trong quá trình xây dựng',
        type: 'warning',
        duration: 3000
    })
}

function showErrorToast() {
    toast({
        title: 'Lỗi',
        message: 'Đã có lỗi xảy ra',
        type: 'error',
        duration: 3000
    })
}


