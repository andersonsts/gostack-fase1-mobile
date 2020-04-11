import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.43:3333'
})

export default api;

/**
 * - IOS com emulador: PODE UTILIZAR localhost
 * - IOS com dispositivo fisico: IP DA MAQUINA (PC)
 * - Android com emulador: INSIRA O COMANDO $ adb reverse tcp:3333 tcp:3333. ESSE COMANDO
 *   REDIRECIONA A PORTA 3333 DA NOSSA MAQUINA, PARA A PORTA 3333 DO EMULADOR.
 *   COM ISSO PODEMOS UTILIZAR O localhost.
 * - Android com emulador: 10.0.2.2 (Android Studio)
 * - Android com emulador: 10.0.3.2 (Genymotion)
 * - Android com físico: IP da maquina
 */