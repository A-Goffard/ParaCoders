const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;

const products = [
  {
      id: 1,
      tipo: "medicamentos",
      nombre: "Aceite de cannabis CBD 25%",
      precio: 15.61,
      imagen: "img/22.png",
      otrafoto: "/img/aceite-cannabis.jpg.webp",
      descripcion: "¡JB Oil 25% es un aceite rico en CBD de la nueva línea JB OIL!En el JB Oil 25% encontramos una alta concentración de CBD, posible gracias a métodos innovadores de extracción y dilución de la sustancia en los que solo se utilizan materias primas orgánicas excepcionales. Mediante disolventes supercríticos de CO2, se extrae el CBD aislado que luego se mezclará con aceite de coco MCT (obtenido en cambio mediante una extracción en frío) para obtener el producto final totalmente inodoro e incoloro. La combinación con aceite de coco le da un sabor delicado e interesante. De esta forma Justbob, cuyo fin último es mantener altos estándares de calidad en cada uno de sus productos, consigue incluir en su catálogo un aceite portentoso y natural, cuyas beneficiosas propiedades están intactas. Nuestro práctico y versátil aceite JB Oil será capaz de brindarte una intensa sensación de placer para disfrutar de momentos de pura relajación."
  },
  {
      id: 2,
      tipo: "herbolario",
      nombre: "AMNESIA CBD BOOST",
      precio: 10.75,
      imagen: "img/27.png",
      otrafoto: "/img/Marihuana-amnesia-cbd-boost-500x390.jpg",
      descripcion: "Ha llegado la nueva LÍNEA CBD BOOST de JustBob, una nueva Línea desarrollada por primera vez en Italia en 2022 después de numerosos estudios sobre variedades de CBD. Uno de los productos más innovadores de esta nueva línea es AMNESIA CBD BOOST. Un producto completamente nuevo que sorprenderá a todos con sus infinitas cualidades. La característica principal de esta variedad es una presencia muy alta de CBD, que ronda el 40%. Este resultado, que va más allá del potencial natural de la planta, se obtiene gracias a un tratamiento especial con resinas naturales que se realiza en la fase final de floración de la planta. El nombre es una clara referencia a la alta presencia de CBD en las flores de la planta. Esto hace que el producto sea único. El porcentaje total de cannabinoides es de hasta el 50%."
  },
  {
      id: 3,
      tipo: "medicamentos",
      nombre: "WELCOME WINTER KIT",
      precio: 50.00,
      imagen: "img/11.png",
      otrafoto: "/img/welcome-winter-kit-de-marihuana-cbd.jpg",
      descripcion: "¿El frío y el invierno te están derribando? Recupera tu sonrisa con nuestros nuevos winter kit: ¡una selección de nuestros mejores marihuana CBD diseñados para que tú también salgas indemne de esta temporada! Desde Gorilla Glue hasta Tamizado Mix Indoor, pasando por Ak 47 cbd boost: el Welcome Winter Kit ofrece la selección más variada de marihuana CBD jamás propuesta por JustBob, ¡para todos aquellos que no están satisfechos! AK47 CBD BOOST - 5 GRAMOS | INDOOR | CBD < 47% GELATO CBD BOOST - 5 GRAMOS | GLASSHOUSE | CBD < 42,5% CALIFORNIA SMALL BUDS - 5 GRAMOS | INDOOR | CBD < 21% GORILLA GLUE – 5 GRAMOS | INDOOR | CBD < 20% TAMIZADO MIX INDOOR - 10 GRAMOS | TAMIZADO | CBD < 10%"
  },
  {
      id: 4,
      tipo: "medicamentos",
      nombre: "SHATTER CBD LEMON",
      precio: 4.50,
      imagen: "/img/3.png",
      otrafoto: "/img/Shatter-cbd-lemon-justbob.jpg",
      descripcion: "El Shatter CBD Lemon de Justbob es un Shatter CBD compuesto únicamente por CBD y terpenos naturales extraídos en laboratorio mediante procesos naturales a partir de biomasa de Cáñamo Sativa L. cultivada en Italia. El producto tiene un porcentaje muy alto de CBD, cercano al 99%. El producto viene en forma de cristales duros, que casi parecen romperse como cristales de vidrio colorado; de esta misma característica viene el nombre Shatter = Romperse. Esta conformación hace que el producto sea más fascinante y fácil de desmenuzar. Este Shatter particular se extrae de una calidad particular de Lemon Cheese CBD que le proporciona un color amarillo muy claro y un fuerte aroma a limón. El proceso de extracción se lleva a cabo en laboratorios certificados en Italia que trabajan siguiendo procesos de producción GMP. El CBD y los terpenos están separados de todos los demás componentes de la planta, lo que hace que el producto esté compuesto casi exclusivamente por CBD con un porcentaje muy pequeño de terpenos naturales ligados a él. Producto natural, libre de impurezas y sustancias nocivas para el ser humano. En el laboratorio se le realizan diversos análisis para garantizar su nivel de seguridad y calidad. Las producciones de cáñamo certificadas protegen el medio ambiente y la ecosostenibilidad de los procesos de producción del aislamiento hacen que el producto tenga un impacto cero."
  },
  {
      id: 5,
      tipo: "medicamentos",
      nombre: "CESAMET",
      precio: 17.17,
      imagen: "/img/7.png",
      otrafoto: "/img/medicamentos-cannabinoides-cesamet.jpg",
      descripcion: "Para la venta de este medicamento requerimos adjuntes foto de tu receta médica y de tu identificación oficial; la receta será retenida al momento de la entrega de tu pedido. Si acudes a nuestra sucursal deberás presentar tu identificación al momento de adquirir el producto. En este medicamento NO hay cambios ni devoluciones y se entrega solamente en CDMX y zona metropolitana."
  },
  {
      id: 6,
      tipo: "medicamentos",
      nombre: "Cannabidol Oral",
      precio: 19.60,
      imagen: "/img/20.png",
      otrafoto: "/img/cannabidol-oral-tegor-60-capsulas.jpg",
      descripcion: "Cannabidol Oral de Tegor es un complemento alimenticio formulado para el alivio del dolor originado por molestias musculares o articulares. * Los complementos alimenticios no deben utilizarse como sustitutos de una dieta variada y equilibrada. No superar la dosis diaria expresamente recomendada. Mantener fuera del alcance de los niños más pequeños. "
  },
  {
      id: 7,
      tipo: "herbolario",
      nombre: "Flores Secas de Lavanda",
      precio: 11.99,
      imagen: "/img/12.png",
      otrafoto: "/img/lavanda.jpg",
      descripcion: "El paquete incluye 225g de lavanda. Relleno de 100% natural lavanda seca super grade. sin productos químicos nocivos. Ultra Azul Grade colocado bajo la almohada es demasiado extravagante, muchos usos para sobres, popurrí, plagas disuasorio etc. Relajar cuerpo y mente mediante la adición de una dosis de lavanda en su día. llena el aire con un regalo o popurrí aromático Craft bolsitas a tus amigos y familiares. Satisfacción garantizada: Ofrecemos sin problemas de devolución o cambio si usted no está satisfecho con nuestros productos."
  },
  {
      id: 8,
      tipo: "herbolario",
      nombre: "Raíz de Valeriana Eco",
      precio: 7.90,
      imagen: "/img/4.png",
      otrafoto: "/img/valeriana-raiz-seca-infusion.jpg",
      descripcion: "La infusión de valeriana ecológica REPLANTEA se compone exclusivamente de raíz de valeriana ecológica certificada. Sabor de la infusión de raíz de valeriana: El sabor de la infusión de raíz de valeriana se puede describir como amaderado. Se recomienda añadir un poco de miel para hacer su sabor más agradable. Beneficios de la infusión de valeriana: Ayuda a calmar la ansiedad y el estrés, Ayuda a dormir mejor, Puede reducir algunos síntomas de la menopausia. Preparación: Añadir una cucharada por taza, aproximadamente 1-2 gramos de raíz de valeriana, en agua hirviendo e infusionar durante 5-8 minutos."
  },
  {
      id: 9,
      tipo: "herbolario",
      nombre: "Manzanilla Amarga Flor",
      precio: 2.50,
      imagen: "/img/10.png",
      otrafoto: "/img/manzanilla-amarga-mahon-flor-seca-infusion.jpg",
      descripcion: "Manzanilla amarga flor o Mahón. Forma parte de las plantas que por sus propiedades y características han pasado a ser llamadas plantas medicinales. Ha sido recolectada y envasada en su mejor momento con el fin de conservar intactos los principios activos que la caracterizan."
  },
  {
      id: 10,
      tipo: "ortopedia",
      nombre: "Cojines con espelta",
      precio: 3.19,
      imagen: "/img/18.png",
      otrafoto: "/img/cojinesespelta.jpg",
      descripcion: "Este práctico set de dos almohaditas rellenas de raíz de valeriana hará correr y saltar a tu gato de alegría. Rellenas de raíz de valeriana de calidad farmacéutica, animarán e incitarán a tu mascota al juego. Lánzalas, deja que tu gato perciba el aroma y verás como empieza enseguida a jugar con ellas. Muchas horas de diversión le esperan a tu gato con estas dos almohaditas naturales. Con solo 5 g de raíz de valeriana, el aroma no está tan concentrado, por ello es ideal para gatos de todas las edades. El relleno contiene además espelta de gran calidad. Las fundas de las almohaditas están certificadas por el Öko-Tex Standard."
  },
  {
      id: 11,
      tipo: "ortopedia",
      nombre: "Cojín Cuadrado en Yute",
      precio: 16.95,
      imagen: "/img/19.png",
      otrafoto: "/img/cojinyute.webp",
      descripcion: "El Cojín Cuadrado en Yute (40x40 cm) Ticmon es una apuesta segura para aquellos que buscan mantener la gama cromática neutra en su salón o dormitorio. Está fabricado en yute, un material respetuoso con el medioambiente que aporta a tu espacio la riqueza de su aspecto rústico y artesanal. El diseño característico del trenzado del yute da vitalidad a la estancia, respetando el ambiente relajado y luminoso que construyen los tonos claros. De estilo natural, Ticmon es un clásico que se adapta a la actualidad con la puesta en valor de las fibras naturales. Puede presentar variaciones y detalles únicos debido a su fabricación a mano. ¡Una pieza única!"
  },
  {
      id: 12,
      tipo: "ortopedia",
      nombre: "Bastón caña de bambú",
      precio: 24.00,
      imagen: "/img/22.png",
      otrafoto: "/img/baston-cana-de-bambu.jpg",
      descripcion: "Bastón realizado con una elegante caña de bambú barnizada y empuñadura de madera de haya. Este tipo de bastón es muy ligero, ya que la caña pesa menos que la madera y tiene una gran fuerza. Ideal para personas con movilidad reducida o simplemente para pasear de forma cómoda.  Dispone de la opción de personalizarse con un grabado con tu nombre, iniciales o lo que desees totalmente gratis. Y si es para regalo queda muy original. También existe la opción de corte a medida gratis. Solo tienes que indicar estas opciones en los apartados de personalización. Los artículos personalizados no tienen devolución."
  },
  {
      id: 13,
      tipo: "ortopedia",
      nombre: "Calcetín de Bambú",
      precio: 14.99,
      imagen: "/img/21.png",
      otrafoto: "/img/Calcetines_Bambu_Diabetes_4.jpg",
      descripcion: "Calcetín de Bambú indicado para su uso por personas con Diabetes o con Pies Sensibles, debido a las características técnicas diferenciales del tejido de bambú en relación al tejido de algodón. Disponible en los colores beige y negro. Tallas disponibles desde el 35 hasta el 44. En cada envase se incluyen 2 calcetines (1 par)."
  },
  {
      id: 14,
      tipo: "cuidado",
      nombre: "Cannabis Crema De Dia",
      precio: 17.00,
      imagen: "/img/17.png",
      otrafoto: "/img/cremacannavisdedia.webp",
      descripcion: "La Crema de día de Natura Premium, está diseñada para uso diario. Emulsión fina y suave que deja un tacto ligero y aterciopelado. Su alta concentración de Aceite de Cáñamo otorga una intensa hidratación en la dermis protegiéndola de factores externos irritantes y aportando una profunda sensación de calma y serenidad a la piel, que favorece de forma holística a toda la dermis. PROPIEDADES: Combate las inflamaciones cutáneas gracias a su efecto antiinflamatorio. Ayuda a curar las lesiones cutáneas. Efecto antioxidante. Previene el daño tisular. Ofrece cierta protección contra la exposición al sol UV. Contiene propiedades que facilitan la acción hidratante. El aceite no es graso, y se absorbe fácilmente por los poros, sin obstruirlos."
  },
  {
      id: 15,
      tipo: "cuidado",
      nombre: "Bálsamo de cannabis con CBD",
      precio: 14.50,
      imagen: "/img/23.png",
      otrafoto: "/img/balsamo_muscular_cannabis.webp",
      descripcion: "Bálsamo de cannabis 100% natural elaborado artesanalmente con aceite de cannabis de variedad terapéutica “Indica“, cera natural de abeja, esencia pura natural de clavo y CBD liofilizado. El aceite de cáñamo o cannabis es un analgésico natural que está indicado para dolores musculares y articulares en general, normalmente dolores de tipo crónico, como artrosis, artritis, reumas, fibromialgias, etc… El aceite esencial de clavo es un potentísimo analgésico natural. La sinergia de ambos aceites, junto con el CBD liofilizado, hacen de este bálsamo de cannabis un potente y muy efectivo antiinflamatorio y analgésico. El aceite de cáñamo es eficaz también en el tratamiento de dolencias de la piel como eczemas, psoriasis, dermatitis atópica… Este bálsamo tiene una textura untuosa, algo aceitosa, que permite que se extienda y penetre en la piel muy facilmente. Su aroma fresco y mentolado proporciona una sensación inmediata de paz y calma. Se aplica como una pomada masajeando la zona afectada y se absorbe muy rápidamente. Es preferible usar muy poquita cantidad 2 o 3 veces al día. No contiene THC. Está indicado para uso diario. Formato: 50gr."
  },
  {
      id: 16,
      tipo: "cuidado",
      nombre: "Crema manos Cannabis",
      precio: 3.45,
      imagen: "/img/16.png",
      otrafoto: "/img/cremamanoscannabis.webp",
      descripcion: "Puedes comprar el Cannabis Crema de Manos Nutritiva 50 ml de BABARIA al mejor precio en nuestra parafarmacia online. Si quieres conocer como Cannabis Crema de Manos Nutritiva 50 ml Babaria, puede ayudarte, aquí te explicamos como funciona y que hace. Este producto cuenta con una delicada fórmula, cuidadosamente diseñada para brindar el mejor cuidado a las pieles más sensibles. Tiene como ingrediente principal el aceite de cannabis que es rico en ácidos grasos esenciales, vitaminas, aminoácidos y antioxidantes. Su efecto es suave y su absorción rápida, por lo que resulta cómoda su aplicación en diversas horas del día. El uso prolongado de esta crema, tendrá como resultado, la hidratación y nutrición profunda de las capas superiores de la epidermis. Todos los productos con los que contamos de la marca BABARIA, están probados y cuidadosamente elegidos para ofrecer el mejor resultado. Contamos con los mejores productos de la marca BABARIA."
  },
  {
      id: 17,
      tipo: "cuidado",
      nombre: "Bálsamo labial regenerador",
      precio: 4.93,
      imagen: "/img/25.png",
      otrafoto: "/img/balsamo_labial-removebg-preview.png",
      descripcion: "Su fórmula especial lubrica suavemente los labios, formando una capa protectora y brillante sobre la piel, protegiendo contra factores externos, como el aire frío o el viento. Al mismo tiempo, el lápiz labial hidrata y da a los labios un aspecto sano y saludable. Se puede utilizar tanto en los labios como en la piel, por ejemplo para aliviar la irritación, el picor y la inflamación después de la picadura de un insecto."
  },
  {
      id: 18,
      tipo: "cuidado",
      nombre: "Cannabis Lote de Regalo",
      precio: 4.93,
      imagen: "/img/11.png",
      otrafoto: "/img/kitcremascuidado.webp",
      descripcion: "Dermacol Cannabis, Bálsamos labiales para mujer, Todo lo necesario para una piel con aspecto bonito en un solo paquete. El lote de regalo Dermacol Cannabis es ideal como regalo para usted o sus seres queridos. Propiedades: hidrata y nutre en profundidad, repara la piel dañada, protege contra las influencias externas, revitaliza y suaviza la piel."
  }
]
;


products.forEach(
  ({ id, tipo, nombre,imagen, precio }) => {
    dessertCards.innerHTML += `
      <div class="dessert-card productosGeneral">
        <h2>${nombre}</h2>
        <img class="fotoCategoria" src="${imagen}" alt="${nombre}">
        <p class="dessert-price">$${precio}</p>
        <p class="product-category">Categoria: ${tipo}</p>
        <button 
          id="${id}" 
          class="btn add-to-cart-btn">Add to cart
        </button>
      </div>
    `;
  }
);

class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }

  addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { nombre, precio } = product;
    this.items.push(product);

    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
    })

    const currentProductCount = totalCountPerProduct[product.id];
    const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);

    currentProductCount > 1 
      ? currentProductCountSpan.textContent = `${currentProductCount}x`
      : productsContainer.innerHTML += `
      <div id=dessert${id} class="product">
        <p>
          <span class="product-count" id=product-count-for-id${id}></span>${nombre}
        </p>
        <p>${precio}</p>
      </div>
      `;
  }

  getCounts() {
    return this.items.length;
  }

  clearCart() {
    if (!this.items.length) {
      alert("Your shopping cart is already empty");
      return;
    }

    const isCartCleared = confirm(
      "Are you sure you want to clear all items from your shopping cart?"
    );

    if (isCartCleared) {
      this.items = [];
      this.total = 0;
      productsContainer.innerHTML = "";
      totalNumberOfItems.textContent = 0;
      cartSubTotal.textContent = 0;
      cartTaxes.textContent = 0;
      cartTotal.textContent = 0;
    }
  }

  calculateTaxes(amount) {
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }

  calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.precio, 0);
    console.log(subTotal);
    const tax = this.calculateTaxes(subTotal);
    this.total = subTotal + tax;
    cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    cartTaxes.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${this.total.toFixed(2)}`;
    return this.total;
  }
};

const cart = new ShoppingCart();
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

[...addToCartBtns].forEach(
  (btn) => {
    btn.addEventListener("click", (event) => {
      cart.addItem(Number(event.target.id), products);
      totalNumberOfItems.textContent = cart.getCounts();
      cart.calculateTotal();
    })
  }
);

cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  /* showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show"; */
  cartContainer.style.display = isCartShowing ? "block" : "none";
});

clearCartBtn.addEventListener("click", cart.clearCart.bind(cart));
