import './note.css';
import { useNavigate } from 'react-router-dom';

function Note() {

  const navigate=useNavigate();

  return (
    <>
    <link
      rel="canonical"
      href="https://getbootstrap.com/docs/5.2/examples/product/"
    />
    <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n\n      .b-example-divider {\n        height: 3rem;\n        background-color: rgba(0, 0, 0, .1);\n        border: solid rgba(0, 0, 0, .15);\n        border-width: 1px 0;\n        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n      }\n\n      .b-example-vr {\n        flex-shrink: 0;\n        width: 1.5rem;\n        height: 100vh;\n      }\n\n      .bi {\n        vertical-align: -.125em;\n        fill: currentColor;\n      }\n\n      .nav-scroller {\n        position: relative;\n        z-index: 2;\n        height: 2.75rem;\n        overflow-y: hidden;\n      }\n\n      .nav-scroller .nav {\n        display: flex;\n        flex-wrap: nowrap;\n        padding-bottom: 1rem;\n        margin-top: -1px;\n        overflow-x: auto;\n        text-align: center;\n        white-space: nowrap;\n        -webkit-overflow-scrolling: touch;\n      }\n    "
      }}
    />
    <link href="product.css" rel="stylesheet" />
    <header className="site-header sticky-top py-1">
      <nav className="container d-flex flex-column flex-md-row justify-content-between">
        <a className="py-2" href="#" aria-label=".......">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="d-block mx-auto"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>Product</title>
            <circle cx={12} cy={12} r={10} />
            <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
          </svg>
        </a>
        <a
          className="py-2 d-none d-md-inline-block"
          style={{ color: "pink" }}
          href="https://www.google.com/maps"
        >
          Maps
        </a>
        <a
          className="py-2 d-none d-md-inline-block"
          style={{ color: "pink" }}
          href="#"
        >
          Features
        </a>
        <a
          className="py-2 d-none d-md-inline-block"
          style={{ color: "pink" }}
          href="#"
        >
          Support
        </a>
        <a
          className="py-2 d-none d-md-inline-block"
          style={{ color: "pink" }}
          href="#"
        >
          Offers
        </a>
        <a
          className="py-2 d-none d-md-inline-block"
          style={{ color: "pink" }}
          href="#"
        >
          Rating
        </a>
      </nav>
    </header>
    <main>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">CAR POOLING</h1>
          <p className="lead fw-normal" style={{ color: "purple" }}>
            For the victory, transportation was required
          </p>
          <a className="btn btn-outline-secondary" href="#">
            Coming soon
          </a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block" />
        <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
      </div>
      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">
              <b>USER</b>
            </h2>
            <p className="lead">Carpooling shows a greater heart</p>
            <a className="btn btn-outline-secondary" href="#" onClick={()=>{navigate('/userPage')}}>
              User Login
            </a>
          </div>
          <div
            className="bg-light shadow-sm mx-auto"
            style={{ width: "80%", height: 300, borderRadius: "21px 21px 0 0" }}
          />
        </div>
        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">
              <b>DRIVER</b>
            </h2>
            <p className="lead">Put to work the vacant seat</p>
            <a className="btn btn-outline-secondary" href="#" onClick={()=>{navigate('/userLogin')}}>
              Driver login
            </a>
          </div>
          <div
            className="bg-dark shadow-sm mx-auto"
            style={{ width: "80%", height: 300, borderRadius: "21px 21px 0 0" }}
          />
        </div>
      </div>
    </main>
    <footer className="container py-5">
      <div className="row">
        <div className="col-12 col-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="d-block mb-2"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>Product</title>
            <circle cx={12} cy={12} r={10} />
            <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
          </svg>
          <small className="d-block mb-3 text-muted">© 2017–2022</small>
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="link-secondary" href="#">
                Cool stuff
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                Random feature
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                Team feature
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                Stuff for developers
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                Another one
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                Last time
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="link-secondary" href="#">
                Resource name
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                Resource
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                Another resource
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                Final resource
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="link-secondary" href="#">
                Business
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                Education
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                Government
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                Gaming
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="link-secondary" href="#">
                Team
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                Locations
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                Privacy
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </>
  
  );
}
export default Note;