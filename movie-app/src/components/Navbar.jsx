import React from 'react'
import "../assets/styles/Navbar.css"

export const Navbar = () => {
  return (
    <aside id="nav">
        <img className='logo' src="https://s3-alpha-sig.figma.com/img/16ee/2b01/96d07f533c0ed4eedc017b658a40f22e?Expires=1670198400&Signature=BYu2BkiC-fn~ZUCtgHUW500j-~0KK3YTbBjpRM80Kpfx4JLUeUkrGyznHIkJiyZ6FYzdWKYRUyh23leWhrcWESS-ZJWysqMh1mIGtXcetwY09gz8ZxAPGNMPbiB6MCe2AFSgY~JjbZV4qW6TvFotLRMXXFkScvRkNHoRQJXs3s-RxkzkreBze7Jz3zTBLtt0NbwhQElvR7wC7FEiuJHWnnymwNkII8MIj1FFTGlonNoudN3K2YwUYZg73D~Bh5OAhQUoIY2siTh6LYeTwaRGjWs7gebr0IbkM6cbptDSKIXV-r1SPeFcdONvRwbYyEzguESB23LK5gUlm9ZX~cMQ4A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" 
         alt="img" />
        <div className="searchContiner">
        <input className="buscar" type="text" placeholder='  Buscar..'/>
        <button className='lupa' type='submit'><span className="material-symbols-outlined">search</span></button>
        </div>
        <input className="favoritos"type="submit" value={'Ver Favoritos 3'}/>
    </aside>
  )
}
