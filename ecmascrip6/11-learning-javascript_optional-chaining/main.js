const obj = {
    name: 'Alice',
    cat: {
        name: 'Diana',
        cat2: {
            name: 'Leona',
            cat3: {
                name: 'Zyra'
            }
        }
    }
};

// Check qua tất cả
//** Cách cơ bản **
if (obj.cat &&
    obj.cat.cat2 &&
    obj.cat.cat2.cat3
    ) {
    console.log(obj.cat.cat2.cat3.name);
}

// ** Optional Chaining
// ** => Sử dụng ?.[KEY] trong trường hợp nko chắc chắn rằng KEY đó có tồn tại hay không
if (obj?.cat?.cat2?.cat3) 
    {
    console.log(obj.cat.cat2.cat3.name);}


// ------------------------

const obj2 = {
    // Nếu không có hàm getnName này, khi gọi tới sẽ báo lỗi, nếu dùng ?. sẽ không lỗi
    getName(value) {
        console.log(value);
    }
}

obj2.getName?.(123)