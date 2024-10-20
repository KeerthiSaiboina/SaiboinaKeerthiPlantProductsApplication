import { Component } from "react";

import ProductList from "../ProductList";
import NurseryItems from "../NurseryItems";
import AddtoCartModal from "../AddtoCartModal";
import "./index.css";

const productList = [
  {
    id: 1,
    productImage:
      "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    productName: "Monsterra",
    price: "₹ 299",
  },
  {
    id: 2,
    productImage:
      "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
    productName: "Monsterra",
    price: "₹ 299",
  },
  {
    id: 3,
    productImage:
      "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    productName: "Monsterra",
    price: "₹ 299",
  },
  {
    id: 4,
    productImage:
      "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    productName: "Monsterra",
    price: "₹ 299",
  },
  {
    id: 5,
    productImage:
      "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
    productName: "Monsterra",
    price: "₹ 299",
  },
  {
    id: 6,
    productImage:
      "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    productName: "Monsterra",
    price: "₹ 299",
  },
  {
    id: 7,
    productImage:
      "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    productName: "Monsterra",
    price: "₹ 299",
  },
  {
    id: 8,
    productImage:
      "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
    productName: "Monsterra",
    price: "₹ 299",
  },
  {
    id: 9,
    productImage:
      "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    productName: "Monsterra",
    price: "₹ 299",
  },
];

const nurseryList = [
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/2270/0766/ed50532940537d9d39d2626bb7a95167?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e1u59mBoYOHSu1vnubFHYBlgxelj9I23c0h6FVJu8fe99v6vjeEdd6UOgf5HTHto7xa-16CN1hOLofpqppNDJz2Oxg1tf484NGDPRM6lKLxCAZ94vesYIDXG~EjlY0mXxC0qLyFyzX4~ntpqmYvlbRUFu32C4Pr3e9DHL6To3K2q54-FoFL4hobrTij7oIpGHfxKj4eMB6q2xHjXlvJZkXmQ3Tk7snP0197a8V3CO1XvygFiFYLckqUOzhSQ0JP~4BzrS~rcb84Rbtx8Zc77A4AHVH6ZU-wr9omI~Uc8jTCmEU~A6x~78h0RCTr~cd1EsqQnDTuc-v-d7Cql-7Ytdg__",
    content: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 2,
    image:
      "https://s3-alpha-sig.figma.com/img/18ca/98ef/7f83ab9fd1481e530fd7e03257a1bb07?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=erDGloJ54aO~tQLVnk6mFUTpCOi05se3amA3zWA2-RjxzBPwDveQ3iUcUvf8xVOHFYQvflhm91zj7kaIHbsgrpThtzu5Dh3JRhZwvJHKO7fRGqUa5wEQUpDVhd5y-oueSXpnOZIpI1IbRifjQ8f2tlT9fxk514i7BHacGloffymzskxSIKUkKPz1dvafN-ko30hOsnIRTkG5HRH9JLa28c6MdQ54mOFvYebATztRbkrhsIPRtFu45mq28f4wgVpX5k2z2ZgXFiz7JtNgAZxlsRIL8XcgVlk6X1p7XMmW95DFj2d8bUe1TIZcgsuwDc-yRE0eMX8mGgk2ENqIm~Xvig__",
    content: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 3,
    image:
      "https://s3-alpha-sig.figma.com/img/c0ec/e88d/1218900e6bd6cc6f3d5a104c0dbb8212?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gwOdq7lIphjriAYrtpA-wCNACJZQOVmzwfpVmFho~vrcylQhOmPtsN8OXniTb7xqVeIWxCh1Gf0c0Mc6Fb5QePY02V3GoHGuSQEF2uc9443BVOlD3zNAW6f2hG3Ez0tyMai~eioWsjF9jXgnUfKTppFztwiblMTol2j1X9YojnliUt4fVSyoMQloQFHVgcS-W3YCeTRlQb~eF5U7ftU~WRqSBAw8PTlBk3ZL3AdSgrmM9g9D-zcpbbSzXvKt31sRbspjrTuwizjJjMHvOeOdRbvtDDhiQeo41kXUsVTvzOMX431ItCDie4VTBu3yaPiFpoh0FmLYfyE9tw9bYA4OtQ__",
    content: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 4,
    image:
      "https://s3-alpha-sig.figma.com/img/8fde/bc3a/bbfa90988173614195fa81d43aa2bb63?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uq~cUZjJwUIMTCxGd2BO4UljQ5vb0cOXS8S80aR5GmRRuItolrte6b~eDUQYaDoU6HNTvPLfoMYduHyiOOtcXAFVYdxyHY8LFwdz~1kwdSEuf2qwypbUGVmZbmuk0X9yhzsDIl-tIE8e3t5kkrG2JmRw8GxEK-jurl1HOIdWkGgTgcz468aaSR5mtjrQSzw0szcP18IJsRUl3TuiOTbwgTrn5nb-idemfwo0UIJChxVmedjaNMCqr1NNYkEgA98HLGwwWZb78ymzThMEdpDQzfPlEH0HyyTag-m8vps4E277jSNm7xdnDcL-eSjfc6bn4jiM5nCu6tECNG3ufir90A__",
    content: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 5,
    image:
      "https://s3-alpha-sig.figma.com/img/279e/3d50/4fa5aaae113083a0db504c05b0632860?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E0EGVWoDEQUwjx~hnB0USRsU7reHwOw6193w9u8swslxPzKI2ddB68xXahlNiWBgb6QR1DKlu2tCi9~c0~2ZjR0uWly5Vcx7~JK4ey05Oo-h7lhION9Fh4j7HB0P53BMtKvM9RrM0~-7HC~5J~MLQqaXfWRrwt1Uc15Q9WhsKhnLCBp7FO60nEePDTwtWZaVrVOv4TBhl~y25LIPF1aiqzO~GeiwsGJMJprtqx9084RytbMRxZPLTBrUSLXU7AC5zSjCM~2eivRKOiquEQBUkT2Dm59cKGZm6LHfdtKW9XFzM1ZjO4rVPawK~iu8yAGplOZ5YujxmRiWzdzGsm4yJA__",
    content: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 6,
    image:
      "https://s3-alpha-sig.figma.com/img/c120/4e2d/7eca96d5008198d2181b991de6f19034?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A52FjCuUbWlwRRJ5kOMbW3y-66Ka0TLI~iK-4nDzoZjb6qA1ukUSJEt~m8qs64IXzwUwhN6sjYdXNt3MJfz4a2XhqqyikLsjbZfS5Mlmxedhs7rxSrK1BwgurAatuEB33Szqkf0UdNyvZF8iiAT1C1eNJl2wN6mjmARVS8GLQXroxtZQe9gRVvHH1K85O8n6B~qNfbMdm0-83H3gnp4Lr~MjstT6BveBn4Htrcw0XdYY3mlPvdPvjNFE~nDn8NEbbOSZEr9dxVZV5m5mp6qhV-ejNZlw~NBSg0NFw8U-jhgBatLZUVqY5jRXaOdmKgnMrKhH9UHRCqBi5RdRcjNWcA__",
    content: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 7,
    image:
      "https://s3-alpha-sig.figma.com/img/84ed/e8e9/935a62fb31df9354ded9299559307ae6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EkUcvN372cksGIWPwvW5owktp9ytkBrXYwKGswGcGcKTz1P5vCJ1AwDg6XEfLcuYGcNx3T1xbxpj2h0vVt2Jx~J8CqBxk5HOJ8WQGo9GtH-JwoEbw4G2si9EZQgMu95KzZzjsFsbph4Xeq5w6POOx4eZvkuWwjZmTCujut12EViAzhpxyYT8qSiL~eM0VMPp53TxbY47bk1EYpFVi2f~sc8BuMIJ9pnlkysxhWaYblRHulmELZCJcaUDO1QVDUYR6BdzNpmAmCw9xLufhKnsqamAgmGkfC0XfTfN3mxoWd6fZJKhiubj5FVj70lJp1uSwL4zggWiChoZOHe2doVWEA__",
    content: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 8,
    image:
      "https://s3-alpha-sig.figma.com/img/5267/1e62/8375cef653c6b9ae388a7f2dda4ba454?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=poRgM6pbkBqdnWsbKmfeS4UcxZkAhi2YMDifsURB-xTIfZcY-QDKhmleBzmNDh3fkjjWEfCtge~Lcr5s7BgkVPU00EZzrOgDP4AwiJpQZhLvRByGDVoDVufqT0lzgOyN9eUHZhC3wUrnOTQCDUpdFO8J0Af~FYl4246Uu-bgheR2kdA2NqkfxOmQs15LNeEsa177Q6uzc4CeEsxTi7Krr-H2F5RcU1fIufPCkvfJasBqRujHQeLQV-7OsXT9tMvK98cPscZcnrQdbTLa0XL4WQrWlaRMbK6tRpyIB7nuxyRTAUhRzeXbkOfSHHhy-wYWGJCwKeQNfn2WzbWKMJxbQA__",
    content: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 9,
    image:
      "https://s3-alpha-sig.figma.com/img/1708/c339/362237370ea139219155cf9fca2448d3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOfBgpd9SdsbpVrN0LI3IT5bMV-rQDcjcD~6xv-PGI3HQ-z1SlJOGY6sCK2eSVMEgLB~JEOWFyA-eZPoULd-HfJCJ9NH06HJyk07nKSk8YqswrM91QFC5sBu09eiJikco~Cz9XH5pryCnorJ4qyY0BbUW2XZMGOpehUePpzpv4rd8NoonGchv0gqyMNmSHdSfUV5pobVkd3wOYhyuHyU~TlTXkXEqeEC0AWUg4TKMy~YYdrPP4dCdMODHxFVfPAB~zzmOWC-7HOmun~xC~uXlIgHJwEUN-j9IJ7YLPpbC6F6hjJHm9gglfaw1KI~uOeW5bcduOxMUxbxtWRPkgYRWg__",
    content: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
];

class Pagination extends Component {
  render() {
    return (
      <>
        <div className="main-container">
          <div className="top-container">
            <button className="btn-1">Plants</button>
            <button className="btn-2">Pots</button>
            <p className="description">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
              necessitatibus enim ut internos accusantium a numquam autem ab
              rerum omnis. Non molestiae ratione et laborum doloribus aut
              molestiae voluptates ut porro excepturi sit molestiae obcaecati
              qui quis beatae est voluptatem eius. Et architecto nihil id labore
              omnis hic iste deleniti et porro aspernatur.
            </p>
          </div>
          <h1 class="nursery-heading">Nursery</h1>
          <ul class="nursery-container">
            {nurseryList.map((eachItem) => (
              <NurseryItems nurseryDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
          <div className="bottom-container">
            <div className="sort-container">
              <p className="description">300 products</p>
              <select className="select-element">
                <option>Sort By</option>
              </select>
            </div>
            <ul className="products-container">
              {productList.map((eachItem) => (
                <ProductList productDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
            <ul className="cart-container">
              {productList.map((eachItem) => (
                <AddtoCartModal productDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
          <button className="view-more-btn">View More</button>
        </div>
      </>
    );
  }
}

export default Pagination;
