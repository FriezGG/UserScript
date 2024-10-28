// ==UserScript==
// @name         Link Bypass Script
// @namespace    http://helya.pylex.xyz
// @version      1.0
// @description  Bypass link redirects with ease!
// @author       FriezGG
// @match        *://*.linkvertise.com/*/dynamic/?*
// @match        *://*.linkvertise.com/*/*
// @match        *://*.sub2unlock.com/*
// @match        *://*.sub2unlock.net/*
// @match        *://*.sub2unlock.io/*
// @match        *://*.sub4unlock.io/*
// @match        *://*.sub4unlock.com/*
// @match        *://*.rekonise.com/*
// @match        *://*.letsboost.net/*
// @match        *://*.mboost.me/a/*
// @match        *://*.socialwolvez.com/app/l/*
// @match        *://*.boost.ink/*
// @match        *://*.sub2get.com/link?l=*
// @match        *://*.valyse.best/verification?device_id=*
// @match        *://*.rebrand.ly/*
// @match        *://*.v.gd/*
// @match        *://*.tinyurl.com/*
// @match        *://*.is.gd/*
// @match        *://*.sub1s.com/*
// @match        *://*.tinylink.onl/*
// @match        *://*.mobile.codex.lol?token=*
// @match        *://*.mediafire.com/file/*/*/file
// @match        *://*.mediafire.com/file_premium/*/*/file
// @match        *://*.*/s?*
// @match        *://*.loot-link.com/s*
// @match        *://*.loot-links.com/s*
// @match        *://*.lootlinks.co/s*
// @match        *://*.lootdest.info/s*
// @match        *://*.lootdest.org/s*
// @match        *://*.links-loot.com/s*
// @match        *://*.linksloot.net/s*
// @match        *://*.lootlink.org/s*
// @match        *://*.lootdest.com/s*
// @exclude      *://*.linkvertise.com
// @exclude      *://*.sub2get.com
// @exclude      *://*.boost.ink
// @exclude      *://*.socialwolvez.com
// @exclude      *://*.mboost.me
// @exclude      *://*.letsboost.net
// @exclude      *://*.rekonise.com
// @exclude      *://*.sub2unlock.com
// @exclude      *://publisher.linkvertise.com/*
// @exclude      *://*.linkvertise.com/search*
// @exclude      *://*.linkvertise.com/login*
// @exclude      *://*.linkvertise.com/profile*
// @exclude      *://blog.linkvertise.com
// @exclude      *://blog.linkvertise.com/*
// @exclude      *://*.linkvertise.com/assets/vendor/*
// @exclude      *://publisher.linkvertise.com/*
// @exclude      *://*.link-mutation.linkvertise.com/*
// @exclude      *://*.linkvertise.com/assets/external/thinksuggest
// @run-at       document-end
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    
    // API URL and key
    const apiUrl = "http://helya.pylex.xyz:9206/api/bypass?url=";
    const apiKey = "jVUbjfvNf5eHEWDAo5Tkoppo";
    
    // Get current URL
    const currentUrl = window.location.href;
    
    // Function to bypass the link
    function bypassLink(url) {
        GM_xmlhttpRequest({
            method: "GET",
            url: `${apiUrl}${encodeURIComponent(url)}&api_key=${apiKey}`,
            onload: function(response) {
                try {
                    const data = JSON.parse(response.responseText);
                    if (data.result) {
                        window.location.href = data.result;
                    } else {
                        console.error("Bypass failed: No result found");
                    }
                } catch (error) {
                    console.error("Failed to parse API response:", error);
                }
            },
            onerror: function(error) {
                console.error("Request failed:", error);
            }
        });
    }
    
    // Call the bypass function with the current URL
    bypassLink(currentUrl);
})();
