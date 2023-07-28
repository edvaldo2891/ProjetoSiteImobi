import React from 'react';
import { Link } from "react-router-dom";

function Contato() {
  return (
        <div className="container" id="info-container">
             <div className="container" id="paginas">
              {/* exibição de informações dinãmicas */}
                <div>
                    <h1>Página de contatos.</h1>
                    <p>
                        <Link to="/contato/1">Forma de contato 1</Link>
                    </p>
                    <p>
                        <Link to="/contato/2">Forma de contato 2</Link>
                    </p>
                    <p>
                        <Link to="/contato/3">Forma de contato 3</Link>
                    </p>
                </div>
                <h3>Página de Contato</h3>
                <p>Caro cliente,Estamos muito felizes em tê-lo como parte da nossa comunidade. Sua satisfação é nossa prioridade máxima, e estamos aqui para ajudar em tudo o que você precisar. Se você tiver alguma dúvida, feedback ou precisar de suporte em relação aos nossos produtos/serviços, por favor, não hesite em entrar em contato conosco. Nossa equipe de atendimento ao cliente está pronta para ouvir suas necessidades e oferecer soluções personalizadas. Você pode nos contatar através de diferentes canais: Por telefone: [Inserir número de telefone] Por e-mail: [Inserir endereço de e-mail] Pelo nosso site: [Inserir URL do site] - Utilize o formulário de contato disponível na página "Contato". Estamos ansiosos para ouvir de você e garantir que sua experiência conosco seja excepcional em todos os aspectos. Sua opinião é fundamental para continuarmos a aprimorar nossos produtos e serviços. Muito obrigado por escolher [Nome da sua empresa].Aguardamos ansiosamente o seu contato! Atenciosamente,A equipe [Nome da sua empresa]</p>
             </div>
          <form>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome:</label>
              <input type="text" className="form-control" id="nome" placeholder="Digite o seu nome" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="email" placeholder="Digite o seu email" />
            </div>
            <div className="mb-3">
              <label htmlFor="mensagem" className="form-label">Mensagem:</label>
              <textarea className="form-control" id="mensagem" rows="3" placeholder="Digite a sua mensagem"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      );
}

export default Contato;