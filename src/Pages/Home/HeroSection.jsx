import React from "react";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Nisha Patar</p>
          <h1 className="hero--section--title">
            <span
              id="hero--section-title--color"
              className="hero--section-title--color"
            >
              Full Stack
            </span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            A passionate individual who always thrives to work on end to end
            products which develop sustainable and scalable social and technical
            systems to create impact.
          </p>
        </div>
        <div className="btn-div">
          <a href="#" className="btn btn-cv">
            Download CV
          </a>
        </div>

        <div className="social--icon">
          <ul>
            <li>
              <a
                href="https://m.facebook.com/profile.php/?id=100012285991961&name=xhp_nt__fb__action__open_user"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M22.6667 8.65479H18.6667C17.9303 8.65479 17.3333 9.25175 17.3333 9.98812V13.9881H22.6667C22.8183 13.9848 22.9621 14.0553 23.0523 14.1773C23.1424 14.2993 23.1677 14.4575 23.12 14.6015L22.1333 17.5348C22.0424 17.804 21.7908 17.986 21.5067 17.9881H17.3333V27.9881C17.3333 28.3563 17.0348 28.6548 16.6667 28.6548H13.3333C12.9651 28.6548 12.6667 28.3563 12.6667 27.9881V17.9881H10.6667C10.2985 17.9881 10 17.6896 10 17.3215V14.6548C10 14.2867 10.2985 13.9881 10.6667 13.9881H12.6667V9.98812C12.6667 7.0426 15.0545 4.65479 18 4.65479H22.6667C23.0348 4.65479 23.3333 4.95327 23.3333 5.32145V7.98812C23.3333 8.35631 23.0348 8.65479 22.6667 8.65479Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/@Nini-shaa?si=K6aqJHoTy5aFnv4u"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 50 50"
                >
                  <path d="M 23.857422 8.5 C 17.504717 8.5 11.602344 8.9526234 8.234375 9.65625 A 1.50015 1.50015 0 0 0 8.2128906 9.6621094 C 5.6754768 10.230693 3.2861897 12.048234 2.7832031 14.894531 A 1.50015 1.50015 0 0 0 2.78125 14.90625 C 2.394836 17.200265 2 20.190694 2 24.5 C 2 28.801151 2.3961903 31.712324 2.8847656 34.126953 C 3.4000756 36.889296 5.7342165 38.761817 8.3105469 39.337891 A 1.50015 1.50015 0 0 0 8.3476562 39.347656 C 11.86271 40.040284 17.598467 40.5 23.951172 40.5 C 30.303877 40.5 36.042686 40.04028 39.558594 39.347656 A 1.50015 1.50015 0 0 0 39.595703 39.337891 C 42.133117 38.769306 44.522404 36.951766 45.025391 34.105469 A 1.50015 1.50015 0 0 0 45.029297 34.083984 C 45.409789 31.743169 45.902812 28.755621 46 24.439453 A 1.50015 1.50015 0 0 0 46 24.40625 C 46 20.087697 45.50571 17.078675 45.023438 14.695312 C 44.512192 11.927074 42.175378 10.049478 39.595703 9.4726562 A 1.50015 1.50015 0 0 0 39.476562 9.4511719 C 36.0464 8.9689502 30.211115 8.5 23.857422 8.5 z M 20.15625 17.001953 C 20.526656 16.994297 20.909531 17.081906 21.269531 17.285156 L 29.873047 22.146484 C 31.324047 22.966484 31.324047 25.035469 29.873047 25.855469 L 21.269531 30.716797 C 19.830531 31.528797 18.037109 30.500328 18.037109 28.861328 L 18.037109 19.138672 C 18.037109 17.909422 19.045031 17.024922 20.15625 17.001953 z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://chimera25.wordpress.com/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 23 23"
                >
                  <path d="M 12 2 C 6.5 2 2 6.5 2 12 C 2 17.5 6.5 22 12 22 C 17.5 22 22 17.5 22 12 C 22 6.5 17.5 2 12 2 z M 12 3 C 17 3 21 7 21 12 C 21 17 17 21 12 21 C 7 21 3 17 3 12 C 3 7 7 3 12 3 z M 12 4 C 9.2 4 6.7007812 5.3996094 5.3007812 7.5996094 L 5.8007812 7.5996094 C 6.7007813 7.5996094 8 7.5 8 7.5 C 8.4 7.5 8.4996094 8.0992188 8.0996094 8.1992188 C 8.0996094 8.1992188 7.6992187 8.3007812 7.1992188 8.3007812 L 9.9003906 16.199219 L 11.699219 10.900391 L 10.699219 8.1992188 C 10.299219 8.1992188 9.9003906 8.0996094 9.9003906 8.0996094 C 9.5003906 8.0996094 9.5 7.4003906 10 7.4003906 C 10 7.4003906 11.299609 7.5 12.099609 7.5 C 12.899609 7.5 14.199219 7.4003906 14.199219 7.4003906 C 14.599219 7.4003906 14.700781 7.9996094 14.300781 8.0996094 C 14.300781 8.0996094 13.900391 8.1992187 13.400391 8.1992188 L 16.300781 16.199219 L 17.099609 13.5 C 17.099609 12.5 17.400391 11.7 17.400391 11 C 17.400391 10.2 16.999219 9.9003906 16.699219 9.4003906 C 16.299219 8.7003906 16 8.2 16 7.5 C 16 6.8 16.600781 6.0996094 17.300781 6.0996094 L 17.400391 6.0996094 C 16.000391 4.7996094 14.1 4 12 4 z M 19 8.1992188 C 19 8.4992188 18.999609 8.7 19.099609 9 C 19.099609 9.8 19.000781 10.999609 18.800781 11.599609 C 18.200781 13.499609 16.400391 18.699219 16.400391 18.699219 C 16.400391 18.699219 16.499609 18.699609 16.599609 18.599609 C 18.699609 17.199609 20 14.8 20 12 C 20 10.6 19.6 9.2992187 19 8.1992188 z M 4.6992188 8.6992188 C 4.1992188 9.6992188 4 10.8 4 12 C 4 15.2 5.8 17.899219 8.5 19.199219 L 4.6992188 8.6992188 z M 12.099609 12.699219 L 9.6992188 19.699219 C 10.399219 19.899219 11.2 20 12 20 C 12.9 20 13.799219 19.8 14.699219 19.5 C 14.699219 19.5 14.699609 19.400391 14.599609 19.400391 L 12.099609 12.699219 z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nisha-patar-a1b54812b"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero.png" alt="Hero Section" />
      </div>
    </section>
  );
}
