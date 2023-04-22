const text = '(ALIEN WORKSHOP)'
const speed = 200
const addressText = 'P.O. BOX 3247 DAYTON,OHIO 45401'
const textContainer = document.getElementById('text')
const address = document.getElementById('address')
//const image = document.getElementById('image')

let i = 0;


const typeWriter = () => {
    if (i < text.length) {
        textContainer.innerHTML += text.charAt(i)
        i++
        setTimeout(typeWriter, speed)
    } else {
        address.innerHTML += addressText
        address.style.opacity = '1'
       // image.style.opacity = '1'
        }
    
}

typeWriter()