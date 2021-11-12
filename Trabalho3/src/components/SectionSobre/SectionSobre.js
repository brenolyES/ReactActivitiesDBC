import style from "../SectionSobre/SectionSobre.module.css"

function SectionSobre() {
  return (
    <div className={style.container}>
      <div className={style.body}>
      <h1>DBC Cogumelos</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, officia modi reprehenderit consequatur numquam quidem! Ducimus natus pariatur, officiis dolores neque, sint dolor nostrum voluptate voluptates debitis soluta quasi minima optio, aspernatur beatae dignissimos reiciendis sed eaque inventore deserunt a similique? Inventore quasi obcaecati in doloribus et ipsa nisi quo perspiciatis deleniti sit, harum voluptas voluptatum mollitia tempora. Architecto expedita id harum quidem assumenda animi dolores enim vitae nam molestiae repellendus, quibusdam omnis in quasi aliquid nesciunt laudantium odit aspernatur illum accusantium, voluptates obcaecati ad? Velit eius culpa tenetur harum deserunt id quae, tempora libero exercitationem quasi nisi, repudiandae omnis?
      </p>
      <h3>Sobre a DBC Cogumelos</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, officia modi reprehenderit consequatur numquam quidem! Ducimus natus pariatur, officiis dolores neque, sint dolor nostrum voluptate voluptates debitis soluta quasi minima optio, aspernatur beatae dignissimos reiciendis sed eaque inventore deserunt a similique? Inventore quasi obcaecati in doloribus et ipsa nisi quo perspiciatis deleniti sit, harum voluptas voluptatum mollitia tempora. Architecto expedita id harum quidem assumenda animi dolores enim vitae nam molestiae repellendus, quibusdam omnis in quasi aliquid nesciunt laudantium odit aspernatur illum accusantium, voluptates obcaecati ad? Velit eius culpa tenetur harum deserunt id quae, tempora libero exercitationem quasi nisi, repudiandae omnis?
      </p>
      <div className={style.video}>
      <iframe className={style.iframeVideo} src="https://www.youtube.com/embed/kYsQDiVwZbE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </div>
    </div>
  );
}

export default SectionSobre;