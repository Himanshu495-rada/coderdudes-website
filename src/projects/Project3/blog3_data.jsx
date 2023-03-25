import React from 'react';
import { NavLink } from 'react-router-dom';

function blog3_data() {
    return (
        <>
            <p>In this quick tutorial we are going to learn how to use WebView in android studio, and also we have updated one feature in my QR code scanner app tutorial please <NavLink to="/project4" >Check here</NavLink>.</p>
            <h2 className="my-3">WebView</h2>
            <p>WebView is a view that display web pages inside your application. You can also specify HTML string and can show it inside your application using WebView. WebView makes turns your application to a web application. In order to add WebView to your application, you have to add &#60;WebView&#62; element to your xml layout file.</p>
            <h2 className="my-3">Requirements</h2>
            <ul>
                <li>Android Studio</li>
                <li>Android SDK</li>
                <li>Android Device or Emulator</li>
            </ul>
        </>
    );
}

export default blog3_data;