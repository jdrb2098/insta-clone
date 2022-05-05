const tabs = document.querySelectorAll('[data-target]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        tabs.forEach(t => {
            t.classList.remove('fillter-tab-active')
        })
        tab.classList.add('fillter-tab-active')
    })
})
console.log(tabs)