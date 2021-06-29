import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { Selectserver } from '../Selectserver/Selectserver';

import './style.scss';


export function Home(){
    return(

        <div className="main-container">
            <Navbar />

            <div className="container-home">

                <aside>
                    <h2>Selecione o servidor</h2>
                    <div className="select-server">
                        <Selectserver>
                            <option value="taleon">Taleon</option>
                            <option value="hades">Hades</option>
                            <option value="Skelot">Skelot</option>
                        </Selectserver>

                    </div>

                    <div className="why-use">
                        <h3>Por quer usar <strong>tibianovojogo.com</strong></h3>
                        <ul className="why-use-list">
                            <li>Conexão direta com o vendedor</li>
                            <li>Decida qual forma de pagamento direto com o vendendor</li>
                            <li>Personagens de varios servidores em um só lugar</li>
                            <li>Não cobramos nenhum tipo de taxa</li>
                            <li>Da comunidade para comunidade  Tibiana</li>
                        </ul>
                    </div>
                </aside>
            </div>

            <Footer />
        </div>
    );
}