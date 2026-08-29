// Bilingual support for the Balasooriya Hospital site — English and Sinhala.
//
// How this works, and why:
//
// English lives in the HTML itself. It is not stored in a dictionary here.
// That means the page reads correctly with JavaScript disabled, with this file
// missing, or if it throws — the visitor sees English rather than a page of
// blank elements or raw translation keys. For a hospital site that carries
// emergency phone numbers, silent failure has to leave the content readable.
//
// Sinhala is applied on top by swapping textContent. The original English is
// captured from the DOM the first time a language switch happens, so switching
// back needs no second dictionary and the two can never drift apart.
//
// TRANSLATION REVIEW: these strings were written by a developer, not a
// certified medical translator. Department and specialty names especially
// should be checked by a Sinhala-speaking member of clinical staff before
// launch — a mistranslated department name can send a patient to the wrong
// place. Anything not yet reviewed falls back to English, which is safe.

(function () {
  'use strict';

  var STORAGE_KEY = 'preferredLang';

  var SINHALA = {
    // --- emergency bar: highest-stakes strings on the site ---
    'bar.open': 'දිනකට පැය 24, වසරකට දින 365 විවෘතව',
    'bar.emergency': 'හදිසි ප්‍රතිකාර ඒකකය (ETU):',
    'bar.ambulance': 'ගිලන් රථ:',

    // --- navigation ---
    'nav.home': 'මුල් පිටුව',
    'nav.about': 'අපි ගැන',
    'nav.services': 'සේවාවන්',
    'nav.doctors': 'වෛද්‍යවරු',
    'nav.departments': 'අංශ',
    'nav.insurance': 'රක්ෂණය',
    'nav.news': 'පුවත්',
    'nav.careers': 'රැකියා අවස්ථා',
    'nav.booking': 'වෙන් කරවා ගැනීම',
    'nav.contact': 'සම්බන්ධ වන්න',

    // --- homepage ---
    'home.heroTitle': 'ශ්‍රී ලංකාවේ වඩාත් විශ්වාසනීය පෞද්ගලික සෞඛ්‍ය සේවා ආයතනය',
    'home.heroText': 'බාලසූරිය රෝහල, පුත්තලම — දිනකට පැය 24, වසරකට දින 365 විවෘතව. 2009 සිට වයඹ පළාතට සේවය කරමින්.',
    'home.bookCta': 'දිනයක් වෙන් කරවා ගන්න',
    'home.findDoctor': 'වෛද්‍යවරයකු සොයන්න',
    'home.helpTitle': 'අපි ඔබට කෙසේ උදව් කළ හැකිද?',
    'home.quickDepartments': 'අංශ',
    'home.quickDoctors': 'අපගේ වෛද්‍යවරු',
    'home.quickServices': 'සේවාවන්',
    'home.quickBooking': 'දිනයක් වෙන් කරන්න',
    'home.quickInsurance': 'රක්ෂණය සහ බිල්පත්',
    'home.quickFindUs': 'අපව සොයාගන්න',
    'home.departmentsTitle': 'අංශ',
    'home.viewAllDepartments': 'සියලු අංශ බලන්න →',
    'home.specialistsTitle': 'අපගේ විශේෂඥ වෛද්‍යවරු',
    'home.viewAllDoctors': 'විශේෂඥ වෛද්‍යවරු 28 දෙනා බලන්න →',
    'home.consultHours': 'උපදේශන වේලාවන්: සඳුදා–සිකුරාදා පෙ.ව. 6:00–8:00 සහ ප.ව. 4:00 න් පසු, සෙනසුරාදා–ඉරිදා පෙ.ව. 6:00–ප.ව. 8:00. රාත්‍රී කැඳවුම් සේවාව සහිතව.',
    'home.whyTitle': 'අපව තෝරා ගන්නේ ඇයි',
    'home.factSince': '2009 සිට පුත්තලමට සේවය කරමින්',
    'home.factOpen': 'වසරේ සෑම දිනකම විවෘතව',
    'home.factDoctors': 'විශේෂඥ වෛද්‍යවරු',
    'home.factIso': '9001 · 14001 · OHSAS 18001',
    'home.newsTitle': 'පුවත් සහ සම්මාන',
    'home.moreNews': 'තවත් පුවත් →',
    'home.visitTitle': 'අපව බැලීමට එන්න',
    'home.address': 'ලිපිනය:',
    'home.hotline': 'දුරකථන:',
    'home.email': 'විද්‍යුත් තැපෑල:',
    'home.fullContact': 'සම්පූර්ණ සම්බන්ධතා විස්තර සහ අංශ දුරකථන අංක →',

    // --- home page cards and copy ---
    'home.etu': 'හදිසි ප්‍රතිකාර ඒකකය',
    'home.etuText': 'දිනපතා පැය 24 පුරා හදිසි ප්‍රතිකාර. අමතන්න',
    'home.specialist': 'විශේෂඥ උපදේශන',
    'home.specialistText': 'වෛද්‍ය, ශල්‍ය, ප්‍රසූති හා නාරිවේද, ළමා රෝග ඇතුළු අංශ රැසක උපදේශක වෛද්‍යවරු.',
    'home.lab': 'රසායනාගාරය',
    'home.labText': 'රෝහල තුළම රෝග විනිශ්චය — Randox ජාත්‍යන්තර තත්ත්ව තක්සේරු වැඩසටහනේ (එක්සත් රාජධානිය) සාමාජිකයෙකි.',
    'home.pharmacy': 'ඖෂධ ශාලාව',
    'home.pharmacyText': 'පැය 24 පුරා සිල්ලර, තොග හා බාහිර රෝගී ඖෂධ සේවාව.',
    'home.quality': 'සහතික කළ තත්ත්වය',
    'home.qualityText': 'ISO 9001:2008 තත්ත්ව කළමනාකරණය, ISO 14001:2004 පාරිසරික කළමනාකරණය සහ BS OHSAS 18001 වෘත්තීය සෞඛ්‍ය හා ආරක්ෂාව.',
    'home.awards': 'සම්මානලාභී සත්කාරය',
    'home.awardsText': '2017 ජාතික ව්‍යාපාර විශිෂ්ටතා සම්මානවල රන් සම්මානය සහ වයඹ සෞඛ්‍ය විශිෂ්ටතා සම්මානවල හොඳම පෞද්ගලික රෝහල.',
    'home.patientFirst': 'රෝගියා මුල් කරගත් ප්‍රවේශය',
    'home.patientFirstText': 'රෝගී පෞද්ගලිකත්වය, වෘත්තීය ආචාර ධර්ම සහ දේශීය හා ජාත්‍යන්තර සෞඛ්‍ය ප්‍රමිතීන්ට අනුගත වීම.',
    'home.cnci': '2017 CNCI විශිෂ්ටතා සම්මානය',
    'home.cnciText': 'ලංකා ජාතික කර්මාන්ත මණ්ඩලයෙන් රන් (පළාත්) සහ රිදී (ජාතික) සම්මාන.',
    'home.nbea': '2017 ජාතික ව්‍යාපාර විශිෂ්ටතාව',
    'home.nbeaText': 'ජාතික ව්‍යාපාර විශිෂ්ටතා සම්මානවලදී රන් සම්මානය පිරිනමන ලදී.',
    'home.wayamba': '2015 වයඹ සෞඛ්‍ය විශිෂ්ටතාව',
    'home.wayambaText': 'වයඹ පළාතේ හොඳම පෞද්ගලික රෝහල ලෙස පිළිගැනීම.',

    'home.etuCall': 'දිනපතා පැය 24 පුරා හදිසි ප්‍රතිකාර. අමතන්න',
    'spec.cardiologist': 'උපදේශක හෘද රෝග විශේෂඥ',
    'spec.paediatrician': 'උපදේශක ළමා රෝග විශේෂඥ',
    'spec.surgeon': 'ශල්‍ය වෛද්‍ය',
    'spec.obgyn': 'උපදේශක ප්‍රසූති හා නාරිවේද විශේෂඥ',
    // --- contact / insurance / services ---
    'contact.sendMessage': 'අපට පණිවිඩයක් එවන්න',
    'contact.details': 'රෝහලේ විස්තර',
    'ins.providers': 'පිළිගනු ලබන රක්ෂණ සමාගම්',
    'ins.billing': 'බිල්පත් හා ගෙවීම් ක්‍රියාවලිය',
    'ins.billingText': 'රෝගීන්ට බිල්පත් කවුන්ටරයේදී මුදලින්, කාඩ්පතින් හෝ පිළිගනු ලබන රක්ෂණ සමාගමක් හරහා ගෙවිය හැකිය. ඉල්ලීම මත විස්තරාත්මක බිල්පත් ලබා දෙන අතර, සැලසුම් කළ සැත්කමකට පෙර පිරිවැය ඇස්තමේන්තු කිරීමට අපගේ බිල්පත් කණ්ඩායමට උදව් කළ හැකිය.',
    'ins.support': 'බිල්පත් සහාය',
    'svc.etu': 'හදිසි ප්‍රතිකාර ඒකකය',
    'svc.etuText': 'පළපුරුදු වෛද්‍ය කණ්ඩායම් සහිත පැය 24 පුරා හදිසි ප්‍රතිකාර අංශය.',
    'svc.specialist': 'විශේෂඥ උපදේශන',
    'svc.specialistText': 'වෛද්‍ය, ශල්‍ය හා රෝග විනිශ්චය අංශ හරහා උපදේශක විශේෂඥ වෛද්‍යවරු 28 දෙනෙක්.',
    'svc.lab': 'රසායනාගාරය',
    'svc.pharmacy': 'ඖෂධ ශාලාව',
    'svc.pharmacyText': 'සිල්ලර, තොග හා බාහිර රෝගී අංශ සහිත පැය 24 සේවාව.',
    'svc.theatre': 'ශල්‍යාගාරය',
    'svc.theatreText': 'සාමාන්‍ය හා විශේෂඥ අංශ හරහා ශල්‍යකර්ම.',
    'svc.physio': 'භෞත චිකිත්සාව හා පුනරුත්ථාපනය',
    'svc.physioText': 'කැපවූ භෞත චිකිත්සකයෙකු සමඟ සුවය හා පුනරුත්ථාපන සත්කාරය.',
    'svc.ultrasound': 'අල්ට්‍රා සවුන්ඩ් ස්කෑන් (2D/3D/4D)',
    'svc.ultrasoundText': 'රෝහල තුළම රෝග විනිශ්චය රූපගත කිරීමේ සේවා.',
    'svc.ambulance': 'ගිලන් රථ සේවය',

    'svc.labText': 'රෝහල තුළම රෝග විනිශ්චය, Randox ජාත්‍යන්තර තත්ත්ව තක්සේරු වැඩසටහනේ (එක්සත් රාජධානිය) සාමාජිකයෙකි.',
    'svc.ambulanceText': 'පැය 24 පුරා ගිලන් රථ සේවය — අමතන්න 032-226-6266.',
    // --- repeated links ---
    'link.viewDepartment': 'අංශය බලන්න →',
    'link.viewProfile': 'තොරතුරු බලන්න →',

    // --- page banners ---
    'page.services': 'අපගේ සේවාවන්',
    'page.doctors': 'අපගේ වෛද්‍යවරු',
    'page.departments': 'අංශ',
    'page.about': 'අපි ගැන',
    'page.contact': 'සම්බන්ධ වන්න',
    'page.insurance': 'රක්ෂණය සහ බිල්පත්',
    'page.news': 'පුවත් සහ සිදුවීම්',
    'page.careers': 'රැකියා අවස්ථා',
    'page.booking': 'දිනයක් වෙන් කරවා ගැනීම',

    // --- booking form ---
    'booking.notEmergency': 'මෙම පෝරමය හදිසි අවස්ථා සඳහා නොවේ.',
    'booking.emergencyText': 'ඔබට හදිසි වෛද්‍ය සහාය අවශ්‍ය නම්, හදිසි ප්‍රතිකාර ඒකකයට හෝ ගිලන් රථ සේවයට කතා කරන්න. මෙම පෝරමයට පිළිතුරක් එනතුරු බලා නොසිටින්න.',
    'booking.intro': 'ඔබේ විස්තර එවන්න. අපගේ පිළිගැනීමේ කාර්ය මණ්ඩලය වේලාවක් තහවුරු කිරීමට ඔබට නැවත කතා කරනු ඇත.',
    'booking.name': 'සම්පූර්ණ නම',
    'booking.phone': 'දුරකථන අංකය',
    'booking.emailLabel': 'විද්‍යුත් තැපෑල',
    'booking.optional': '(අත්‍යවශ්‍ය නොවේ)',
    'booking.department': 'අංශය',
    'booking.noPreference': 'කැමැත්තක් නැත',
    'booking.doctor': 'කැමති වෛද්‍යවරයා',
    'booking.date': 'කැමති දිනය',
    'booking.reason': 'පැමිණීමේ හේතුව',
    'booking.submit': 'ඉල්ලීම යවන්න',

