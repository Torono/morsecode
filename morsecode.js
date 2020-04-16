let code =  document.querySelector('#code');
function write() {
    document.addEventListener("keyup", event => {
        switch (event.keyCode) {
            case 190:
                code.innerHTML = (code.innerHTML + '.')
                break;
            case 188:
                code.innerHTML = (code.innerHTML + '-')
                break;
            case 32:
                code.innerHTML = (code.innerHTML + '/ ')
                break;
            case 8:
                code.innerHTML = ('')
                break;
            case 65:
                code.innerHTML = (code.innerHTML + '.- ')
                break;
            case 66:
                code.innerHTML = (code.innerHTML + '-... ')
                break;
                case 67:
                    code.innerHTML = (code.innerHTML + '-.-. ')
                    break;
                    case 68:
                code.innerHTML = (code.innerHTML + '-.. ')
                break;    
                case 69:
                code.innerHTML = (code.innerHTML + '. ')
                break;
                case 70:
                code.innerHTML = (code.innerHTML + '..-. ')
                break;
                case 71:
                code.innerHTML = (code.innerHTML + '--. ')
                break;
                case 72:
                code.innerHTML = (code.innerHTML + '.... ')
                break;
                case 73:
                code.innerHTML = (code.innerHTML + '.. ')
                break;
                case 74:
                code.innerHTML = (code.innerHTML + '.--- ')
                break;
                case 75:
                code.innerHTML = (code.innerHTML + '-.- ')
                break;
                case 76:
                code.innerHTML = (code.innerHTML + '.-.. ')
                break;
                case 77:
                code.innerHTML = (code.innerHTML + '-- ')
                break;
                case 78:
                code.innerHTML = (code.innerHTML + '-. ')
                break;
                case 79:
                code.innerHTML = (code.innerHTML + '--- ')
                break;
                case 80:
                code.innerHTML = (code.innerHTML + '.--. ')
                break;
                case 81:
                code.innerHTML = (code.innerHTML + '--.- ')
                break;
                case 82:
                code.innerHTML = (code.innerHTML + '.-. ')
                break;
                case 83:
                code.innerHTML = (code.innerHTML + '... ')
                break;
                case 84:
                code.innerHTML = (code.innerHTML + '- ')
                break;
                case 85:
                code.innerHTML = (code.innerHTML + '..- ')
                break;
                case 86:
                code.innerHTML = (code.innerHTML + '...- ')
                break;
                case 87:
                code.innerHTML = (code.innerHTML + '.-- ')
                break;
                case 88:
                code.innerHTML = (code.innerHTML + '-..- ')
                break;
                case 89:
                code.innerHTML = (code.innerHTML + '-.-- ')
                break;
                case 90:
                code.innerHTML = (code.innerHTML + '--.. ')
                break;
        }
    })
}
document.onkeydown = write();