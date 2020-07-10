import Link from 'next/link';

const Header = () => {
  return (
    <nav className="navigation">
      <section className="container">
        <section className="clearfix">
          <section className="float-left">
            <Link href="/">
              <a title="Um blog sobre front-end, programação, desenvolvimento de software e carreira.">
                <h1 className="title">Felipe G.S.</h1>
              </a>
            </Link>
          </section>
          <section className="float-right">
            <Link href="/about">
              <a className="navigation-item">Sobre</a>
            </Link>
            <a href="https://github.com/felipegs07" target="_blank" rel="noopener noreferrer" className="navigation-item">Portfólio</a>
            <a href="https://dev.to/felipegs" target="_blank" rel="noopener noreferrer" className="navigation-item">Blog</a>
          </section>
        </section>
      </section>
    </nav>
  );
}

export default Header;