!function () {
    var model = {
        fetch: function () {
            var serverMessages = new AV.Query('message')
            return serverMessages.find()
        },
        save: function (userName, messageValue) {
            var leanCloud = AV.Object.extend('message')
            var leanCloudAPI = new leanCloud()
            leanCloudAPI.set('name', userName)
            leanCloudAPI.set('message', messageValue)
            return leanCloudAPI.save()

        }
    }

    var view = $('#messageBoard')

    var controller = {
        view: null,
        model: null,
        messageList: null,
        form: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.initLeanCLoud()
            this.messageList = $('#messagesList')
            this.downLoadMessages()
            this.form = $('#userMessageForm')[0]
            this.bindEvents()
        },
        initLeanCLoud: function () {
            var APP_ID = 'hOAgqVmXVIUVcPGRiQIaVks9-gzGzoHsz'
            var APP_KEY = '8VADLy1mD6lnmTWYJVnAiWzk'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        downLoadMessages: function () {
            this.model.fetch().then((messages) => {
                let messagesOnServer = messages.map((elem) => {
                    return elem.attributes
                })
                messagesOnServer.forEach((elem) => {
                    let li = document.createElement('li')
                    li.textContent = elem.name + ':' + elem.message
                    this.messageList.append(li)
                })
            })
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessages()
            })
        },
        saveMessages: function () {
            let userName = $('#messageBoard #userName')[0].value
            let messageValue = $('#messageBoard #messageValue')[0].value
            this.model.save(userName, messageValue)
                .then(() => {
                    let li = document.createElement('li')
                    li.textContent = userName + ':' + messageValue
                    this.messageList.append(li)
                    $('#messageBoard #messageValue')[0].value = ''
                }), function (error) {
                    alert('留言失败！')
                }
        }
    }

    controller.init(view, model)

}.call()





