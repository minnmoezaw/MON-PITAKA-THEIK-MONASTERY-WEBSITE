import menuIcon from "@assets/menu-bar.svg";
import feature1 from "@assets/feature1.jpeg";
import feature2 from "@assets/feature2.jpeg";
import feature3 from "@assets/feature3.jpeg";
import feature4 from "@assets/feature4.jpeg";
import feature5 from "@assets/feature5.jpeg";
import feature6 from "@assets/feature6.jpeg";
import feature7 from "@assets/feature7.jpeg";
import arrowIcon from "@assets/right-arrow.png";

function App() {
  return (
    <>
      <header>
        <div className="nav">
          <div className="title">
            RAMONNYA NIKAYA MON PITAKA THEIK MONASTERY
          </div>
          <div className="menu">
            <div className="menu__text">
              Menu
              <img className="menu__icon" src={menuIcon} />
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="features__grid">
          <div id="item-0">
            <img src={feature1} />
          </div>
          <div id="item-1">
            <img src={feature2} />
          </div>
          <div id="item-2">
            <img src={feature4} />
          </div>
          <div id="item-3">
            <img src={feature5} />
          </div>
          <div id="item-4">
            <img src={feature6} />
          </div>
          <div id="item-5">
            <img src={feature3} />
          </div>
          <div id="item-6">
            <img src={feature7} />
          </div>
        </div>
        <h2 className="features__heading">
          RAMONNYA NIKAYA MON PITAKA THEIK MONASTERY
        </h2>
        <h2 className="features__heading">ရာမညနိကာယ ဘာတိုက်ပိဋကတ်မန်</h2>
        <article>
          <h2>Programs</h2>
          <div className="programs">
            <div className="programs__program">
              <span className="programs__program__text">
                PUS Pre-University
              </span>
              <img className="programs__program__icon" src={arrowIcon} />
            </div>
            <div className="programs__program">
              <span className="programs__program__text">
                Jamoi Foundation
              </span>
              <img className="programs__program__icon" src={arrowIcon} />
            </div>
            <div className="programs__program">
              <span className="programs__program__text">
                Skill Building
              </span>
              <img className="programs__program__icon" src={arrowIcon} />
            </div>
            <div className="programs__program">
              <span className="programs__program__text">
              မွန်စာပေ
              </span>
              <img className="programs__program__icon" src={arrowIcon} />
            </div>
            <div className="programs__program">
              <span className="programs__program__text">
              စမ္မစကူးလ်
              </span>
              <img className="programs__program__icon" src={arrowIcon} />
            </div>          
          </div>
          <h2>Management Committee</h2>
          <div className="committees">
            <span className="committees__moke">
            ကျောင်းထိုင်ဆရာတော်
            </span>
          </div>
        </article>
      </div>
    </>
  );
}

export default App;
