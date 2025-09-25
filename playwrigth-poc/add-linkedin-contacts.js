import { spawn } from "child_process";
import { chromium } from "@playwright/test";

(async () => {

  const chrome = spawn(
    `"C:/Program Files/Google/Chrome/Application/chrome.exe"`, 
    ["--remote-debugging-port=9222"],{shell:true}); 


    await new Promise(r => setTimeout(r, 5000));
    const browser = await chromium.connectOverCDP("http://localhost:9222");
    const DefaultContext = await browser.contexts()[0];
    const page = DefaultContext.pages()[0];
    await page.goto("https://www.linkedin.com/mynetwork"); 

    const allcontacts = await page.locator("//ul[@class='mn-connection-card__list']/li");

    const ContactTouch = await page.locator(allcontacts).all();
  
})
()