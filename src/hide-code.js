function hideCode(hook, vm) {
    var hideCodeConfig = vm.config.hideCode;
    hook.doneEach(function () {
        if (hideCodeConfig) {
            var targetElms = Array.apply(null, document.querySelectorAll("pre[data-lang]"));
            var template = ['<div class="hide-code-mask">', '<div class="hide-code-mask-btn">', '</div>'].join("");
            targetElms.forEach(function (elm) {
                if (!hideCodeConfig.scroll && hideCodeConfig.height < elm.offsetHeight) {
                    elm.classList.add('hide-code');
                }
                elm.style.maxHeight = hideCodeConfig.height + 'px';
                elm.insertAdjacentHTML("beforeend", template);
            });
        }
    });

    hook.mounted(function () {
        if (hideCodeConfig) {
            var listenerHost = document.querySelector(".content");
            listenerHost.addEventListener("click", function (evt) {
                var isCopyCodeButton = evt.target.classList.contains("hide-code-mask-btn");
                if (isCopyCodeButton) {
                    var buttonElm = evt.target;
                    var preElm = buttonElm.parentNode.parentNode;
                    preElm.classList.remove('hide-code');
                    preElm.style.maxHeight = "";
                }
            });
        }
    });
}

export default hideCode;