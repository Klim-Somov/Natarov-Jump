document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const natarov = document.createElement('div')
    let natarovGoesLeft = 50
    let natarovGoesDown = 150
    let platformCount = 6

    function createDoodler() {
        grid.appendChild(natarov)
        natarov.classList.add('natarov')
        natarov.style.left = natarovGoesLeft + "px"
        natarov.style.bottom = natarovGoesDown + "px"
    };

class Platform {
    constructor(newPlatBottom) {
        
        //рандомится платформа исходя из размера грида минус ширина платформы
        // масрандом умноженное на 315 возвращает любое число от 0 до 315
        this.bottom = newPlatBottom
        this.left = Math.random() * 410
        this.visual = document.createElement('div')
        const visual = this.visual
        visual.classList.add('platform')
        visual.style.left = this.left + "px"
        visual.style.bottom = this.bottom + "px"
        grid.appendChild(visual)
    }
}

    function createPlatforms() {
       for (let i = 0; i < platformCount; i++) {
        //    количество пикселей делю на кол-во платформ
           let platGap = 600 / platformCount
           let newPlatBottom = 100 + i * platGap
           let newPlatform = new Platform(newPlatBottom)
            
       }
    };




    function start() {
        // if (!isGameOver == false) {
            createDoodler()
            createPlatforms()
        }
    // }


    start()












})