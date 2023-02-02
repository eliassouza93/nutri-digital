import { useEffect, useState } from "react"
import style from './inicio.module.scss'

export default function PaginaPrincipal() {
    const [peso, setPeso] = useState(0)
    const [somaPeso, setSomaPeso] = useState(0)
    const [somaProteina, setsomaProteina] = useState(0)
    const [somaCaloria, setsomaCaloria] = useState(0)

    const [carregando, setCarregando] = useState(true)

    function pegaPeso(event: any) {
        setPeso(event.target.value)

    }
    function calculaPeso() {
        setCarregando(false)
        setSomaPeso(peso * 4)
        setsomaProteina(peso * 2)
        setsomaCaloria(peso * 49)
    }
    return (
        <div className={style.tela}>
            <h4>Nutricionista Digital</h4>
            <div>
                <h4>Digite seu peso</h4>
                <div>
                    <div>
                        <label htmlFor="peso">Peso </label>
                        <input type="number " id="peso" onChange={pegaPeso} />
                        <input className={style.botao} type="submit" value='Calcular' onClick={calculaPeso} />
                        {carregando ? (<h1>Aguardando digitar peso</h1>) : (
                            <div>
                                <h3>Sua quantidade de carboidrato diária é:  {somaPeso}g </h3>
                                <h3>Sua quantidade de proteina diária é:  {somaProteina}g </h3>
                                <h3>Sua quantidade de Caloria diária é:  {somaCaloria} kcal </h3>
                            </div>
                        )}
                    </div>
                    <div>
                    </div>
                </div>
            </div>

        </div>
    )
}