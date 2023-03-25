import React from 'react';

function blog4_data() {
    return (
        <>
            <p>QR Code Scanner Android app that we are going to build in this tutorial takes QR code as input from the user and generates the output which is displayed in Text View in the Screen.
                We are going to create An android app that has the ability to scan the QR code available.
                The One Android Library is used in this application building process and you need to use it in our app that we are going to build.</p>
            <h2 className="my-3">QR Code</h2>
            <p>A QR code (an initialism for quick response code) is a type of matrix barcode (or two-dimensional barcode) invented in 1994 by the Japanese company Denso Wave. A barcode is a machine-readable optical label that can contain information about the item to which it is attached. In practice, QR codes often contain data for a locator, identifier, or tracker that points to a website or application. QR codes use four standardized encoding modes (numeric, alphanumeric, byte/binary, and kanji) to store data efficiently; extensions may also be used</p>
            <h2 className="my-3">Requirements</h2>
            <ul>
                <li>Android Studio</li>
                <li>Android SDK</li>
                <li>Dependency = com.budiyev.android:code-scanner:2.1.0</li>
                <li>Android Device or Emulator</li>
            </ul>
        </>
    );
}

export default blog4_data;