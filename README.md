TBC x USAID - სრულად რესპონსიული, სტატიკური ვებ-გვერდი

პროექტი მოიცავს შემდეგ ფაილებს:
1. index.html - პროექტის შემავალი წერტილი, საიტის მთავარი Markup კოდი, რომლის head-ი მოიცავს ძირითად meta-თეგებსა და ლინკებს, სხეული კი დაყოფილია შემდგომ ერთეულებად:
                 1. header
                 2. section-hero
                 3. section-summary
                 4. section-courses
                 5. section-partners
                 6. section-FAQ
                 7. footer
   
2. CSS-ფოლდერი - პროექტის ვიზუალური გაფორმება და ეფექტები, ზემოთ ჩამოთვლილ თითოეულ სექციას შეესაბამება იმავე სახელწოდების .css ფაილი (მაგ: header.css, section-hero.css ...)
                   ფოლდერი ასევე მოიცავს media-Queries.css ფაილს - საიტის რესპონსიული დიზაინისთვის.
                   ელემენტების პოზიციონირებისთვის თითოეულ სექციაში გამოყენებულია CSS Flexbox-ი.
                   section-courses და section-partners - სექციებში ელემენტების მრავალგანზომილებიანი პოზიციონირებისთვის გამოყენეულია CSS Grid-ი.
   
3. script.js - ფაილი შესაბამისი კომენტარებით დაყოფილია 3 ნაწილად:
               1. Slider Component - section-partners-ში არსებული სლაიდერისთვის.
               2. Mobile Navigation - მობილური ნავიგაციისთვის (Viewport < 600px).
               3. Accordion Component - section-FAQ-ში არსებულ კითხვებზე დაკლიკებისას პასუხების გასახსნელად.
               სასურველი ფუნქციონალის მისაღებად გამოყენებულია:
                           ა. DOM-მანიპულაციები.
                           ბ. arrow functions - Accordion Component-ში.
                           გ. foreach მეთოდი - Slider Component-ში.
                           დ. SetInterval - ფუნქცია სლაიდების ავტომატური ცვლისთვის.
   
4. assets-ფოლდერი - პროექტში გამოყენებული სურათებისთვის.

პროექტის გასაშვებად მიყევით ბმულს - https://tbc-usaid.netlify.app/ 
