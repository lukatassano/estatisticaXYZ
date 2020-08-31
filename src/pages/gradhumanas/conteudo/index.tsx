import React from 'react';
import ReactMarkdown from 'react-markdown';
// import { useHistory } from "react-router-dom";

// import colors from "../../../colors";

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import MiniTree from '../../../components/MiniTree';

// import "./conteudo.css";
import { Container } from './styles';

const conteudo: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const history = useHistory();

  // function handleSubmit(url: string) {
  //   history.push(`${url}`);
  // }
  window.scrollTo(0, 0);

  const markdown = '# Titulo';

  return (
    <Container>
      <Header />

      <div className="container">
        <MiniTree />

        <div className="texto">
          <ReactMarkdown source={markdown} escapeHtml={false} />
          <h1>Título!!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quod
            eligendi sequi assumenda cupiditate. Eum error quidem perspiciatis
            aspernatur voluptates, et quasi temporibus, praesentium sit
            doloribus quia ab laboriosam minus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Inventore et quo at rerum. Dolore
            beatae vel sapiente quis vitae ab fugiat! Unde delectus quo illo
            dolorum eos expedita doloribus Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nihil debitis, esse, facilis illo sed
            iste eaque maxime recusandae, placeat nisi omnis? Voluptates
            consequuntur reprehenderit, placeat quasi vero quia minima aliquam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
            magnam laborum! Impedit ex odit velit rerum, aspernatur ipsa
            deserunt numquam officiis id magnam ratione quod nihil? Fugiat natus
            ipsa accusantium? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Et, amet sequi accusamus molestiae sed iure reiciendis neque
            aliquam recusandae debitis rerum quo vitae fugit fuga ullam?
            Delectus praesentium quibusdam facere! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Error, aspernatur necessitatibus?
            Omnis nesciunt illum, sapiente iusto iste aut animi quis dolores qui
            vel quasi amet ipsam nam, natus perferendis. Tempore. perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            placeat officia dolorum tenetur aut debitis quod aspernatur
            voluptates nemo optio modi, dolor soluta minima vitae dolore amet?
            Eos, accusantium possimus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime totam error officiis, nesciunt quasi libero
            maiores minus repudiandae est cupiditate recusandae rem molestiae.
            Magni adipisci velit provident, tempora explicabo nihil. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Deleniti quasi hic,
            natus nulla iusto quod sequi architecto repudiandae veniam.
            Possimus, asperiores? Delectus ut quae dolor assumenda maxime nam
            voluptatibus dolore. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Alias quod eligendi sequi assumenda cupiditate.
            Eum error quidem perspiciatis aspernatur voluptates, et quasi
            temporibus, praesentium sit doloribus quia ab laboriosam minus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            et quo at rerum. Dolore beatae vel sapiente quis vitae ab fugiat!
            Unde delectus quo illo dolorum eos expedita doloribus Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nihil debitis, esse,
            facilis illo sed iste eaque maxime recusandae, placeat nisi omnis?
            Voluptates consequuntur reprehenderit, placeat quasi vero quia
            minima aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Nemo, magnam laborum! Impedit ex odit velit rerum, aspernatur
            ipsa deserunt numquam officiis id magnam ratione quod nihil? Fugiat
            natus ipsa accusantium? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Et, amet sequi accusamus molestiae sed iure
            reiciendis neque aliquam recusandae debitis rerum quo vitae fugit
            fuga ullam? Delectus praesentium quibusdam facere! Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Error, aspernatur
            necessitatibus? Omnis nesciunt illum, sapiente iusto iste aut animi
            quis dolores qui vel quasi amet ipsam nam, natus perferendis.
            Tempore. perspiciatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptate placeat officia dolorum tenetur aut
            debitis quod aspernatur voluptates nemo optio modi, dolor soluta
            minima vitae dolore amet? Eos, accusantium possimus. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Maxime totam error
            officiis, nesciunt quasi libero maiores minus repudiandae est
            cupiditate recusandae rem molestiae. Magni adipisci velit provident,
            tempora explicabo nihil. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti quasi hic, natus nulla iusto quod sequi
            architecto repudiandae veniam. Possimus, asperiores? Delectus ut
            quae dolor assumenda maxime nam voluptatibus dolore. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Alias quod eligendi
            sequi assumenda cupiditate. Eum error quidem perspiciatis aspernatur
            voluptates, et quasi temporibus, praesentium sit doloribus quia ab
            laboriosam minus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Inventore et quo at rerum. Dolore beatae vel sapiente quis
            vitae ab fugiat! Unde delectus quo illo dolorum eos expedita
            doloribus Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nihil debitis, esse, facilis illo sed iste eaque maxime recusandae,
            placeat nisi omnis? Voluptates consequuntur reprehenderit, placeat
            quasi vero quia minima aliquam. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Nemo, magnam laborum! Impedit ex odit
            velit rerum, aspernatur ipsa deserunt numquam officiis id magnam
            ratione quod nihil? Fugiat natus ipsa accusantium? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Et, amet sequi accusamus
            molestiae sed iure reiciendis neque aliquam recusandae debitis rerum
            quo vitae fugit fuga ullam? Delectus praesentium quibusdam facere!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
            aspernatur necessitatibus? Omnis nesciunt illum, sapiente iusto iste
            aut animi quis dolores qui vel quasi amet ipsam nam, natus
            perferendis. Tempore. perspiciatis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptate placeat officia dolorum
            tenetur aut debitis quod aspernatur voluptates nemo optio modi,
            dolor soluta minima vitae dolore amet? Eos, accusantium possimus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            totam error officiis, nesciunt quasi libero maiores minus
            repudiandae est cupiditate recusandae rem molestiae. Magni adipisci
            velit provident, tempora explicabo nihil. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti quasi hic, natus nulla iusto
            quod sequi architecto repudiandae veniam. Possimus, asperiores?
            Delectus ut quae dolor assumenda maxime nam voluptatibus dolore.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quod
            eligendi sequi assumenda cupiditate. Eum error quidem perspiciatis
            aspernatur voluptates, et quasi temporibus, praesentium sit
            doloribus quia ab laboriosam minus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Inventore et quo at rerum. Dolore
            beatae vel sapiente quis vitae ab fugiat! Unde delectus quo illo
            dolorum eos expedita doloribus Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nihil debitis, esse, facilis illo sed
            iste eaque maxime recusandae, placeat nisi omnis? Voluptates
            consequuntur reprehenderit, placeat quasi vero quia minima aliquam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
            magnam laborum! Impedit ex odit velit rerum, aspernatur ipsa
            deserunt numquam officiis id magnam ratione quod nihil? Fugiat natus
            ipsa accusantium? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Et, amet sequi accusamus molestiae sed iure reiciendis neque
            aliquam recusandae debitis rerum quo vitae fugit fuga ullam?
            Delectus praesentium quibusdam facere! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Error, aspernatur necessitatibus?
            Omnis nesciunt illum, sapiente iusto iste aut animi quis dolores qui
            vel quasi amet ipsam nam, natus perferendis. Tempore. perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            placeat officia dolorum tenetur aut debitis quod aspernatur
            voluptates nemo optio modi, dolor soluta minima vitae dolore amet?
            Eos, accusantium possimus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime totam error officiis, nesciunt quasi libero
            maiores minus repudiandae est cupiditate recusandae rem molestiae.
            Magni adipisci velit provident, tempora explicabo nihil. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Deleniti quasi hic,
            natus nulla iusto quod sequi architecto repudiandae veniam.
            Possimus, asperiores? Delectus ut quae dolor assumenda maxime nam
            voluptatibus dolore.
          </p>
        </div>

        <div className="ad" />
      </div>
      <Footer />
    </Container>
  );
};

export default conteudo;
