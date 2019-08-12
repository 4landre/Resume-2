!function () {
    //导航菜单效果
    let liTags = document.querySelectorAll('.nav ul li')
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function () {
            liTags[i].classList.add('active')
        }
        liTags[i].onmouseleave = function () {
            liTags[i].classList.remove('active')
        }
    }


    //导航跳转
    let aTags = document.querySelectorAll('.nav ul li a')
    for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
            x.preventDefault()
            let a = aTags[i]
            let href = a.getAttribute('href')
            let element = document.querySelector(href)
            let targetTop = element.offsetTop - 65
            let currentTop = window.scrollY
            let time = Math.abs(targetTop - currentTop) / 100 * 300
            if (time > 500) {
                time = 500
            }

            //tween
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);

            var coords = { y: currentTop }; // 起始点 (0, 0)
            var tween = new TWEEN.Tween(coords) // 创建一个新的tween用来改变 'coords'
                .to({ y: targetTop }, time) // 在1s内移动至 (300, 200)
                .easing(TWEEN.Easing.Quadratic.InOut) // 使用缓动功能使的动画更加平滑
                .onUpdate(function () { // 在 tween.js 更新 'coords' 后调用
                    window.scrollTo(0, coords.y)
                })
                .start(); // 立即开始 tween
        }
    }
}.call()