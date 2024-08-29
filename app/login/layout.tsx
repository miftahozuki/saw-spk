import Image from 'next/image';

export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode;
  })  {
    return (

<div className="page page-center">
      <div className="container container-tight py-4">
        <div className="text-center mb-4">
          <a href="." className="navbar-brand navbar-brand-autodark">
            <Image src="/logo.png" width="110" height="32" alt='logo'/>
            </a>
        </div>
        {children}
      </div>
    </div>

    )
}