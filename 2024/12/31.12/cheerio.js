const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

const url = "https://www.10bis.co.il/next/restaurants/search/";

async function automateSearch() {
  const browser = await puppeteer.launch({
    headless: false, // Set headless to false to see what's happening
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded" });

  // Step 1: Wait for and close the Intercom widget (if it appears)
  await page
    .waitForSelector(".intercom-page-close", { timeout: 15000 })
    .catch(() => {}); // Ignore error if not found

  // Step 2: Press ESC
  await page.keyboard.press("Escape");

  // Step 3: Type the address into the input field
  const address = "שדרות הנרקיסים, Sderat HaNarkisim 11, Ramat Gan, ישראל";
  await page.type("#homePage_SelectAddress", address);

  // Step 4: Wait for the `ul` dropdown to appear
  await page.waitForSelector("ul", { visible: true });

  // Step 5: Wait for the second child of the `ul` to appear and select it
  await page.evaluate(() => {
    const ul = document.querySelector("ul");
    if (ul && ul.children.length >= 2) {
      const secondChild = ul.children[1]; // Get the second `li` element
      secondChild.click(); // Click the second `li`
    }
  });

  // Step 6: Press the Down Arrow twice to navigate the list (optional if needed)
  await page.keyboard.press("ArrowDown"); // First down arrow
  await page.keyboard.press("ArrowDown"); // Second down arrow

  // Step 7: Press Enter to confirm the selection
  await page.keyboard.press("Enter");

  // Step 8: Wait for the new page to load
  await page.waitForNavigation({ waitUntil: "domcontentloaded" });

  // Step 9: You can now check if the page has loaded and verify if everything works.
  console.log("Page has loaded after address selection.");

  // Set the viewport for the final page
  await page.setViewport({
    width: 1920, // Set the width to 1920px (typical desktop screen width)
    height: 1080, // Set the height to 1080px (typical screen height)
  });

  // Step 10: Get the page content (HTML)
  const pageContent = await page.content();

  // Step 11: Use Cheerio to parse the HTML and extract the information you want
  const $ = cheerio.load(pageContent);

  // Example: Extract all restaurant names (change this selector as needed)
  const restaurantNames = [];
  $(".CuisineItem-gGWNLg").each((index, element) => {
    // Extract the text content from the label and the src attribute from the image
    const labelText = $(element).find("label").text().trim(); // Get the label text
    const imageSrc = $(element).find("div img").attr("src"); // Get the image src

    // Push the data as an object to the restaurantNames array
    if (labelText && imageSrc) {
      restaurantNames.push({
        name: labelText,
        imageSrc: imageSrc,
      });
    }
  });

  // Output the JSON format
  console.log(JSON.stringify(restaurantNames, null, 2));

  // Step 12: Extract background image of a div
  const backgroundImage = await page.evaluate(() => {
    const div = document.querySelector(".Root-jGilGP"); // Select the div with the class
    return div ? window.getComputedStyle(div).backgroundImage : null;
  });

  console.log("Background Image:", backgroundImage);

  // Close the browser
  await browser.close();

  return { restaurantNames, backgroundImage }; // Return the extracted data
}

automateSearch()
  .then(({ restaurantNames, backgroundImage }) => {
    console.log("Final restaurant names:", restaurantNames);
    console.log("Final background image:", backgroundImage);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
