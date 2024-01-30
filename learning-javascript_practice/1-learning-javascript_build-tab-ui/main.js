const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// xử lý hiển thị dưới dạng array => thêm []
const tabActive = $(['.tab-item.active'])  
const line = $('.tabs .line') 

// Xử lý CSS Line, mặc định tatb active sẽ hiển thị line
line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

tabs.forEach((tab, index) => {
    const pane = panes[index]

    tab.onclick = function() {
        // Kiểm tra xem nếu có class nào có active => removeclass active
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        // Xử lý CSS Line, khi tab được active, độ dài line active sẽ = độ dài tab
        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

        // Thêm class active
        this.classList.add('active')
        pane.classList.add('active')
    }
});

