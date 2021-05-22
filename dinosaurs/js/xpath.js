var headings = document.evaluate('//*/h2', document, null, XPathResult.ANY_TYPE, null );
var thisHeading = headings.iterateNext();

var alertText1 = 'Заголовки h2 в документі:\n'

while (thisHeading) {
  alertText1 += thisHeading.textContent + '\n';
  thisHeading = headings.iterateNext();
}

var links = document.evaluate('//li[a]', document, null, XPathResult.ANY_TYPE, null );
var thisLink = links.iterateNext();

var alertText2 = 'Теги <li>, в яких міститься посилання\n'

while (thisLink) {
  alertText2 += thisLink.textContent + '\n';
  thisLink = links.iterateNext();
}

var classes = document.evaluate('//h3[contains(@class,"gallery__title")]', document, null, XPathResult.ANY_TYPE, null );
var thisClass = classes.iterateNext();

var alertText3 = 'Теги <h3>, з класом "gallery__title" \n'

while (thisClass) {
  alertText3 += thisClass.textContent + '\n';
  thisClass = classes.iterateNext();
}

var images = document.evaluate('//img/@src', document, null, XPathResult.ANY_TYPE, null );
var thisImage = images.iterateNext();

var alertText4 = 'Атрибути src усіх картинок \n'

while (thisImage) {
  alertText4 += thisImage.textContent + '\n';
  thisImage = images.iterateNext();
}

alert(alertText1);
alert(alertText2);
alert(alertText3);
alert(alertText4);