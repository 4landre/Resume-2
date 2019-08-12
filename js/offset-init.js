!function () {
    offsetInit()
    window.addEventListener('scroll', function () {
        findTheClosestAndSetClass()
    })





    function offsetInit() { //设置offset
        let specialTag = document.querySelectorAll('[data-x]')
        for (let i = 0; i < specialTag.length; i++) {
            specialTag[i].classList.add('offset')
        }

    }

    function findTheClosestAndSetClass() {
        //对比[data-x]数据选出离视口最近的那个
        let specialTag = document.querySelectorAll('[data-x]')
        let space = []
        for (let i = 0; i < specialTag.length; i++) {
            space[i] = Math.abs(specialTag[i].offsetTop - window.scrollY)

        }
        let min = 0
        for (let i = 0; i < specialTag.length - 1; i++) {
            if (space[min] > space[i + 1]) {
                min = i + 1
            }
        }

        specialTag[min].classList.remove('offset')

        //找到离视口最近的元素并添加高亮
        let id = specialTag[min].id
        let highLightA = document.querySelector('.nav ul li a[href="#' + id + '"]')
        let highLightLi = highLightA.parentNode
        let AllLi = highLightLi.parentNode
        let brothersAndHLLi = AllLi.children
        for (let i = 0; i < brothersAndHLLi.length; i++) {
            brothersAndHLLi[i].classList.remove('highlight')
        }
        highLightLi.classList.add('highlight')

        //超视距取消高亮
        if (space[min] > 500) {
            highLightLi.classList.remove('highlight')
        }
    }
}.call()