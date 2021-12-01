const data = [
    {"code":"ACS-UH 1010X","level":1000,"name":"ACS-UH 1010X Anthropology and the Arab World\n","program":["ACS"]}
    ,{"code":"ACS-UH 1011X","level":1000,"name":"ACS-UH 1011X Introduction to Modern Arabic Literature\n","program":["ACS"]}
    ,{"code":"ACS-UH 1012X","level":1000,"name":"ACS-UH 1012X Emergence of the Modern Middle East\n","program":["ACS"]}
    ,{"code":"ACS-UH 1410X","level":1000,"name":"ACS-UH 1410X Making of the Muslim Middle East\n","program":["ACS"]}
    ,{"code":"ACS-UH 1411X","level":1000,"name":"ACS-UH 1411X First Islamic World Empire: The Abbasids\n","program":["ACS"]}
    ,{"code":"ACS-UH 1412X","level":1000,"name":"ACS-UH 1412X Race and Ethnicity in the Histories of the Middle East and Africa\n","program":["ACS"]}
    ,{"code":"ACS-UH 1610X","level":1000,"name":"ACS-UH 1610X Feminism and Islamism in the Middle East and North Africa\n","program":["ACS"]}
    ,{"code":"ACS-UH 2210JX","level":2000,"name":"ACS-UH 2210JX Cities and Modern Arabic Literature\n","program":["ACS"]}
    ,{"code":"ACS-UH 2212X","level":2000,"name":"ACS-UH 2212X Introduction to Islamic Texts\n","program":["ACS"]}
    ,{"code":"ACS-UH 2213X","level":2000,"name":"ACS-UH 2213X Modern Arabic Short Stories\n","program":["ACS"]}
    ,{"code":"ACS-UH 2410X","level":2000,"name":"ACS-UH 2410X Paradise Lost: Muslims, Christians and Jews in Al-Andalus\n","program":["ACS"]}
    ,{"code":"ACS-UH 2411X","level":2000,"name":"ACS-UH 2411X Heritage, History and Memory in the Modern \"Middle East\"\n","program":["ACS"]}
    ,{"code":"ACS-UH 2412JX","level":2000,"name":"ACS-UH 2412JX Interwoven Pasts of Spain and Morocco\n","program":["ACS"]}
    ,{"code":"ACS-UH 2413JX","level":2000,"name":"ACS-UH 2413JX Arab Crossroads in China\n","program":["ACS"]}
    ,{"code":"ACS-UH 2415JX","level":2000,"name":"ACS-UH 2415JX History of Modern Iran\n","program":["ACS"]}
    ,{"code":"ACS-UH 2416JX","level":2000,"name":"ACS-UH 2416JX Oasis, Coast and Mountain: Landscapes of History and Culture in the UAE and Oman\n","program":["ACS"]}
    ,{"code":"ACS-UH 2417","level":2000,"name":"ACS-UH 2417 Ottoman Crossroads\n","program":["ACS"]}
    ,{"code":"ACS-UH 2418X","level":2000,"name":"ACS-UH 2418X Politics and Cultures of Nationalism in the Modern Middle East\n","program":["ACS"]}
    ,{"code":"ACS-UH 2419X","level":2000,"name":"ACS-UH 2419X Sufism\n","program":["ACS"]}
    ,{"code":"ACS-UH 2421JX","level":2000,"name":"ACS-UH 2421JX Islamic Architecture as a Design Category\n","program":["ACS"]}
    ,{"code":"ACS-UH 2613X","level":2000,"name":"ACS-UH 2613X Youth in the Middle East\n","program":["ACS"]}
    ,{"code":"ACS-UH 2614X","level":2000,"name":"ACS-UH 2614X Colonization of Palestine\n","program":["ACS"]}
    ,{"code":"ACS-UH 3010","level":3000,"name":"ACS-UH 3010 Problems and Methods in Arab Crossroads Studies\n","program":["ACS"]}
    ,{"code":"ACS-UH 4000","level":4000,"name":"ACS-UH 4000 Arab Crossroads Studies Senior Capstone Seminar\n","program":["ACS"]}
    ,{"code":"ACS-UH 4001","level":4000,"name":"ACS-UH 4001 Arab Crossroads Studies Senior Capstone Project\n","program":["ACS"]}
    ,{"code":"AFRST-UH 1110J","level":1000,"name":"AFRST-UH 1110J Interdisciplinary Introduction to African Urban Studies\n","program":["AFRST"]}
    ,{"code":"ANTH-UH 1010","level":1000,"name":"ANTH-UH 1010 Introduction to Anthropology\n","program":["ANTH"]}
    ,{"code":"ANTH-UH 1102","level":1000,"name":"ANTH-UH 1102 Anthropology of and as Media\n","program":["ANTH"]}
    ,{"code":"ANTH-UH 2110J","level":2000,"name":"ANTH-UH 2110J Anthropology of Indigenous Australia: Art, Politics and Cultural Futures\n","program":["ANTH"]}
    ,{"code":"ANTH-UH 2111","level":2000,"name":"ANTH-UH 2111 India: Topics in Anthropology & History\n","program":["ANTH"]}
    ,{"code":"ANTH-UH 2112J","level":2000,"name":"ANTH-UH 2112J Cities and Globalization: Buenos Aires and Beyond\n","program":["ANTH"]}
    ,{"code":"ANTH-UH 2113","level":2000,"name":"ANTH-UH 2113 Memoir and Ethnography: Understanding Culture Through First-Person Narrative\n","program":["ANTH"]}
    ,{"code":"ANTH-UH 2114X","level":2000,"name":"ANTH-UH 2114X Listening to Islam\n","program":["ANTH"]}
    ,{"code":"ANTH-UH 2115","level":2000,"name":"ANTH-UH 2115 Anthropology of Forced Migration\n","program":["ANTH"]}
    ,{"code":"ANTH-UH 2116","level":2000,"name":"ANTH-UH 2116 Displacement and Dispossession in the Modern Middle East\n","program":["ANTH"]}
    ,{"code":"ANTH-UH 2117J","level":2000,"name":"ANTH-UH 2117J Migration and Displacement Across the Red Sea\n","program":["ANTH"]}
    ,{"code":"ANTH-UH 2120","level":2000,"name":"ANTH-UH 2120 Philosophy and Anthropology Of Ethical Life\n","program":["ANTH"]}
    ,{"code":"ANTH-UH 2121X","level":2000,"name":"ANTH-UH 2121X Gender/Religion/Violence\n","program":["ANTH"]}
    ,{"code":"ARABL-UH 1110","level":1000,"name":"ARABL-UH 1110 Elementary Arabic 1\n","program":["ARABL"]}
    ,{"code":"ARABL-UH 1120","level":1000,"name":"ARABL-UH 1120 Elementary Arabic 2\n","program":["ARABL"]}
    ,{"code":"ARABL-UH 1130","level":1000,"name":"ARABL-UH 1130 Arabic Language and Heritage 1\n","program":["ARABL"]}
    ,{"code":"ARABL-UH 2110","level":2000,"name":"ARABL-UH 2110 Intermediate Arabic 1\n","program":["ARABL"]}
    ,{"code":"ARABL-UH 2120","level":2000,"name":"ARABL-UH 2120 Intermediate Arabic 2\n","program":["ARABL"]}
    ,{"code":"ARABL-UH 2210J","level":2000,"name":"ARABL-UH 2210J Colloquial Arabic: Emirati Dialect\n","program":["ARABL"]}
    ,{"code":"ARABL-UH 2211","level":2000,"name":"ARABL-UH 2211 Colloquial Arabic: Levantine Dialect 1\n","program":["ARABL"]}
    ,{"code":"ARABL-UH 2212","level":2000,"name":"ARABL-UH 2212 Colloquial Arabic: Egyptian Dialect\n","program":["ARABL"]}
    ,{"code":"ARABL-UH 2213","level":2000,"name":"ARABL-UH 2213 Colloquial Arabic: Emirati Dialect and Culture\n","program":["ARABL"]}
    ,{"code":"ARABL-UH 3110","level":3000,"name":"ARABL-UH 3110 Advanced Arabic 1\n","program":["ARABL"]}
    ,{"code":"ARABL-UH 3120","level":3000,"name":"ARABL-UH 3120 Advanced Arabic 2\n","program":["ARABL"]}
    ,{"code":"ARABL-UH 3211","level":3000,"name":"ARABL-UH 3211 Colloquial Arabic: Levantine Dialect 2\n","program":["ARABL"]}
    ,{"code":"ARTH-UH 1010","level":1000,"name":"ARTH-UH 1010 Foundations of Art History I\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 1011","level":1000,"name":"ARTH-UH 1011 Foundations of Art History II\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 1112J","level":1000,"name":"ARTH-UH 1112J Art & Architecture in Berlin\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 1114J","level":1000,"name":"ARTH-UH 1114J Politics of Modern Middle Eastern Art\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 1115JX","level":1000,"name":"ARTH-UH 1115JX Islamic Architecture: Formation to Revival\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 1116","level":1000,"name":"ARTH-UH 1116 Introduction to South Asian Art\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 1117J","level":1000,"name":"ARTH-UH 1117J Art Markets\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 1118","level":1000,"name":"ARTH-UH 1118 Patronage, Devotion and Pilgrimage\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 1810X","level":1000,"name":"ARTH-UH 1810X Art and Architecture of the Islamic World\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 1811X","level":1000,"name":"ARTH-UH 1811X Gulf and Indian Ocean World Art and Architecture\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 2118X","level":2000,"name":"ARTH-UH 2118X Contemporary Art and Politics in the Arab World\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 2120","level":2000,"name":"ARTH-UH 2120 Curatorial Practice\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 2121J","level":2000,"name":"ARTH-UH 2121J Museums in a Global Context\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 2122J","level":2000,"name":"ARTH-UH 2122J Age of Warhol\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 2123","level":2000,"name":"ARTH-UH 2123 Museums, Art and Society\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 2124","level":2000,"name":"ARTH-UH 2124 Art of the Sixties\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 2125","level":2000,"name":"ARTH-UH 2125 Art of the 1970s and 80s: Postminimalism to Postmodernism & Beyond\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 2126","level":2000,"name":"ARTH-UH 2126 Japanese Art: Currents of Influence and Transformation\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 2127JX","level":2000,"name":"ARTH-UH 2127JX Traces of Islam in Iberia\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 2128","level":2000,"name":"ARTH-UH 2128 Money and Art in the Global Renaissance\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 2129","level":2000,"name":"ARTH-UH 2129 Deciphering Japanese Design\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 2610","level":2000,"name":"ARTH-UH 2610 Global Renaissance\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 2810","level":2000,"name":"ARTH-UH 2810 Silk Roads, Sea Routes and Shared Heritage\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 3010","level":3000,"name":"ARTH-UH 3010 Thinking Art\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 4000","level":4000,"name":"ARTH-UH 4000 Art History Capstone Seminar\n","program":["ARTH"]}
    ,{"code":"ARTH-UH 4001","level":4000,"name":"ARTH-UH 4001 Art History Capstone Project\n","program":["ARTH"]}
    ,{"code":"ARTMD-GH 5001","level":5000,"name":"ARTMD-GH 5001 Graduate Critique Seminar 1\n","program":["ARTMD"]}
    ,{"code":"ARTMD-GH 5002","level":5000,"name":"ARTMD-GH 5002 Graduate Critique Seminar 2\n","program":["ARTMD"]}
    ,{"code":"ARTMD-GH 5051","level":5000,"name":"ARTMD-GH 5051 Individual Studio Critique & Review 1\n","program":["ARTMD"]}
    ,{"code":"ARTMD-GH 5060","level":5000,"name":"ARTMD-GH 5060 Writing for Artists\n","program":["ARTMD"]}
    ,{"code":"ARTMD-GH 5720","level":5000,"name":"ARTMD-GH 5720 Special Topics in Art & Media\n","program":["ARTMD"]}
    ,{"code":"ARTMD-GH 6120","level":6000,"name":"ARTMD-GH 6120 An Explorative Grammar for Sculpture\n","program":["ARTMD"]}
    ,{"code":"AW-UH 1111","level":1,"name":"AW-UH 1111 Archaeology of the Near East from the Origins of Agriculture to Alexander the Great\n","program":["AW"]}
    ,{"code":"AW-UH 1113X","level":1000,"name":"AW-UH 1113X Alexander and the East: Central Asia and the Mediterranean from the Achaemenid Period\n","program":["AW"]}
    ,{"code":"AW-UH 1114","level":1000,"name":"AW-UH 1114 Doing Archeology: Case Studies from Western Asia\n","program":["AW"]}
    ,{"code":"AW-UH 1116","level":1000,"name":"AW-UH 1116 Egyptomania\n","program":["AW"]}
    ,{"code":"AW-UH 1118","level":1000,"name":"AW-UH 1118 Archaeology, Arabia and the Bible\n","program":["AW"]}
    ,{"code":"BIOL-UH 2010","level":2000,"name":"BIOL-UH 2010 Human Physiology\n","program":["BIOL"]}
    ,{"code":"BIOL-UH 2113","level":2000,"name":"BIOL-UH 2113 Evolution\n","program":["BIOL"]}
    ,{"code":"BIOL-UH 2114","level":2000,"name":"BIOL-UH 2114 Genetics\n","program":["BIOL"]}
    ,{"code":"BIOL-UH 2120","level":2000,"name":"BIOL-UH 2120 Ecology\n","program":["BIOL"]}
    ,{"code":"BIOL-UH 3090","level":3000,"name":"BIOL-UH 3090 Research Seminar in Biology\n","program":["BIOL"]}
    ,{"code":"BIOL-UH 3101","level":3000,"name":"BIOL-UH 3101 Behavioral and Integrative Neuroscience\n","program":["BIOL"]}
    ,{"code":"BIOL-UH 3116","level":3000,"name":"BIOL-UH 3116 Immunology\n","program":["BIOL"]}
    ,{"code":"BIOL-UH 3117","level":3000,"name":"BIOL-UH 3117 Molecular Neurobiology\n","program":["BIOL"]}
    ,{"code":"BIOL-UH 3118","level":3000,"name":"BIOL-UH 3118 Conservation Biology\n","program":["BIOL"]}
    ,{"code":"BIOL-UH 3160","level":3000,"name":"BIOL-UH 3160 Special Topics in Biology\n","program":["BIOL"]}
    ,{"code":"BIOL-UH 3211","level":3000,"name":"BIOL-UH 3211 Experimental Neurobiology\n","program":["BIOL"]}
    ,{"code":"BIOL-UH 3213","level":3000,"name":"BIOL-UH 3213 Applied Molecular Biology Techniques\n","program":["BIOL"]}
    ,{"code":"BIOL-UH 3218","level":3000,"name":"BIOL-UH 3218 Synthetic Biology\n","program":["BIOL"]}
    ,{"code":"BIOL-UH 3220","level":3000,"name":"BIOL-UH 3220 Experimental Systems Biology\n","program":["BIOL"]}
    ,{"code":"BIOL-UH 4001","level":4000,"name":"BIOL-UH 4001 Capstone Project in Biology 1\n","program":["BIOL"]}
    ,{"code":"BIOL-UH 4002","level":4000,"name":"BIOL-UH 4002 Capstone Project in Biology 2\n","program":["BIOL"]}
    ,{"code":"BUSOR-UH 1001J","level":1000,"name":"BUSOR-UH 1001J Principles of Marketing\n","program":["BUSOR"]}
    ,{"code":"BUSOR-UH 1003","level":1000,"name":"BUSOR-UH 1003 Management & Organizations\n","program":["BUSOR"]}
    ,{"code":"BUSOR-UH 1004","level":1000,"name":"BUSOR-UH 1004 Strategic Management\n","program":["BUSOR"]}
    ,{"code":"BUSOR-UH 1005J","level":1000,"name":"BUSOR-UH 1005J Language of Business\n","program":["BUSOR"]}
    ,{"code":"BUSOR-UH 1006J","level":1000,"name":"BUSOR-UH 1006J Cross-Cultural Negotiation\n","program":["BUSOR"]}
    ,{"code":"BUSOR-UH 1007","level":1000,"name":"BUSOR-UH 1007 Introduction to Entrepreneurship\n","program":["BUSOR"]}
    ,{"code":"BUSOR-UH 1009","level":1000,"name":"BUSOR-UH 1009 Ethics, Technology, and Business\n","program":["BUSOR"]}
    ,{"code":"BUSOR-UH 1011","level":1000,"name":"BUSOR-UH 1011 Foundations of Leadership\n","program":["BUSOR"]}
    ,{"code":"BUSOR-UH 1012J","level":1000,"name":"BUSOR-UH 1012J Development and Entrepreneurship in Africa\n","program":["BUSOR"]}
    ,{"code":"BUSOR-UH 1014J","level":1000,"name":"BUSOR-UH 1014J The Gulf: A 21st Century Hub for Finance, Trade and Energy\n","program":["BUSOR"]}
    ,{"code":"BUSOR-UH 1301","level":1000,"name":"BUSOR-UH 1301 Business Ethics & Corporate Social\n","program":["BUSOR"]}
    ,{"code":"BUSOR-UH 1302","level":1000,"name":"BUSOR-UH 1302 Impact Investing\n","program":["BUSOR"]}
    ,{"code":"BUSOR-UH 1501","level":1000,"name":"BUSOR-UH 1501 Introduction to Accounting\n","program":["BUSOR"]}
    ,{"code":"BUSOR-UH 2002","level":2000,"name":"BUSOR-UH 2002 Business and Technology\n","program":["BUSOR"]}
    ,{"code":"BUSOR-UH 2003","level":2000,"name":"BUSOR-UH 2003 Managerial Accounting\n","program":["BUSOR"]}
    ,{"code":"BUSOR-UH 2004","level":2000,"name":"BUSOR-UH 2004 Data Analytics for Business\n","program":["BUSOR"]}
    ,{"code":"CADT-UH 1000","level":1000,"name":"CADT-UH 1000 Multidisciplinary Artistic Collaborations\n","program":["CADT"]}
    ,{"code":"CADT-UH 1001","level":1000,"name":"CADT-UH 1001 Manus et Machina\n","program":["CADT"]}
    ,{"code":"CADT-UH 1004Q","level":1000,"name":"CADT-UH 1004Q Rhythm\n","program":["CADT"]}
    ,{"code":"CADT-UH 1005","level":1000,"name":"CADT-UH 1005 Creativity and Innovation\n","program":["CADT"]}
    ,{"code":"CADT-UH 1006J","level":1000,"name":"CADT-UH 1006J Nomads\n","program":["CADT"]}
    ,{"code":"CADT-UH 1007","level":1000,"name":"CADT-UH 1007 Wood\n","program":["CADT"]}
    ,{"code":"CADT-UH 1008EQ","level":1000,"name":"CADT-UH 1008EQ Touch\n","program":["CADT"]}
    ,{"code":"CADT-UH 1009","level":1000,"name":"CADT-UH 1009 Light\n","program":["CADT"]}
    ,{"code":"CADT-UH 1011","level":1000,"name":"CADT-UH 1011 Words\n","program":["CADT"]}
    ,{"code":"CADT-UH 1012","level":1000,"name":"CADT-UH 1012 Laughter\n","program":["CADT"]}
    ,{"code":"CADT-UH 1013EQ","level":1000,"name":"CADT-UH 1013EQ Language of Computers\n","program":["CADT"]}
    ,{"code":"CADT-UH 1014EJQ","level":1000,"name":"CADT-UH 1014EJQ Heuristics\n","program":["CADT"]}
    ,{"code":"CADT-UH 1015J","level":1000,"name":"CADT-UH 1015J Explorable Stories\n","program":["CADT"]}
    ,{"code":"CADT-UH 1016","level":1000,"name":"CADT-UH 1016 Utilitas, Venustas, Firmitas\n","program":["CADT"]}
    ,{"code":"CADT-UH 1017J","level":1000,"name":"CADT-UH 1017J Re-Performing Death\n","program":["CADT"]}
    ,{"code":"CADT-UH 1018","level":1000,"name":"CADT-UH 1018 Digital Curation\n","program":["CADT"]}
    ,{"code":"CADT-UH 1019","level":1000,"name":"CADT-UH 1019 Lies and Lying\n","program":["CADT"]}
    ,{"code":"CADT-UH 1020","level":1000,"name":"CADT-UH 1020 Wayfinding: Graphic Design in the Built Environment\n","program":["CADT"]}
    ,{"code":"CADT-UH 1021","level":1000,"name":"CADT-UH 1021 Art of Narrative Science\n","program":["CADT"]}
    ,{"code":"CADT-UH 1022","level":1000,"name":"CADT-UH 1022 Vision\n","program":["CADT"]}
    ,{"code":"CADT-UH 1024","level":1000,"name":"CADT-UH 1024 What Is Music?\n","program":["CADT"]}
    ,{"code":"CADT-UH 1025","level":1000,"name":"CADT-UH 1025 Re-Design\n","program":["CADT"]}
    ,{"code":"CADT-UH 1026","level":1000,"name":"CADT-UH 1026 Human Value\n","program":["CADT"]}
    ,{"code":"CADT-UH 1027","level":1000,"name":"CADT-UH 1027 Memoir and Anti-Memoir: Experiments in Text and Image\n","program":["CADT"]}
    ,{"code":"CADT-UH 1029","level":1000,"name":"CADT-UH 1029 Inspiration, Art, and the Examined Life\n","program":["CADT"]}
    ,{"code":"CADT-UH 1031J","level":1000,"name":"CADT-UH 1031J How Movement Makes Meaning: Dramaturgy, Dance, and the Development of Trajal Harrell’s O Medea\n","program":["CADT"]}
    ,{"code":"CADT-UH 1032J","level":1000,"name":"CADT-UH 1032J Documenting Identity\n","program":["CADT"]}
    ,{"code":"CADT-UH 1033","level":1000,"name":"CADT-UH 1033 Bioinspiration\n","program":["CADT"]}
    ,{"code":"CADT-UH 1034J","level":1000,"name":"CADT-UH 1034J Citizen Writer\n","program":["CADT"]}
    ,{"code":"CADT-UH 1037X","level":1000,"name":"CADT-UH 1037X Machines in Islamic Civilization\n","program":["CADT"]}
    ,{"code":"CADT-UH 1038","level":1000,"name":"CADT-UH 1038 Autonomous and Social Robots\n","program":["CADT"]}
    ,{"code":"CADT-UH 1039","level":1000,"name":"CADT-UH 1039 Photo Album\n","program":["CADT"]}
    ,{"code":"CADT-UH 1040","level":1000,"name":"CADT-UH 1040 Ethics of the Image\n","program":["CADT"]}
    ,{"code":"CADT-UH 1042","level":1000,"name":"CADT-UH 1042 Play\n","program":["CADT"]}
    ,{"code":"CADT-UH 1043","level":1000,"name":"CADT-UH 1043 Mapping Urban Utopia\n","program":["CADT"]}
    ,{"code":"CADT-UH 1044JX","level":1000,"name":"CADT-UH 1044JX Sensory Ethnographic Methods in the UAE: Documenting Here, Documenting There\n","program":["CADT"]}
    ,{"code":"CADT-UH 1045J","level":1000,"name":"CADT-UH 1045J Plastic Fantastic\n","program":["CADT"]}
    ,{"code":"CADT-UH 1046J","level":1000,"name":"CADT-UH 1046J Make Art Here\n","program":["CADT"]}
    ,{"code":"CADT-UH 1047J","level":1000,"name":"CADT-UH 1047J Hacking in Global Perspective: Creativity, Copyright, and Control\n","program":["CADT"]}
    ,{"code":"CADT-UH 1048","level":1000,"name":"CADT-UH 1048 Reinventing the Wheel\n","program":["CADT"]}
    ,{"code":"CADT-UH 1049","level":1000,"name":"CADT-UH 1049 Material World\n","program":["CADT"]}
    ,{"code":"CADT-UH 1051","level":1000,"name":"CADT-UH 1051 Performing Online\n","program":["CADT"]}
    ,{"code":"CADT-UH 1052","level":1000,"name":"CADT-UH 1052 Silence\n","program":["CADT"]}
    ,{"code":"CADT-UH 1053","level":1000,"name":"CADT-UH 1053 Designing Health\n","program":["CADT"]}
    ,{"code":"CADT-UH 1054J","level":1000,"name":"CADT-UH 1054J The Praxis of Placemaking\n","program":["CADT"]}
    ,{"code":"CADT-UH 1055J","level":1000,"name":"CADT-UH 1055J What is Autofiction?\n","program":["CADT"]}
    ,{"code":"CADT-UH 1056J","level":1000,"name":"CADT-UH 1056J From Broadcast to Podcast: Storytelling Adapts to a Digital Age\n","program":["CADT"]}
    ,{"code":"CADT-UH 1057J","level":1000,"name":"CADT-UH 1057J Can Art Save Lives? The Health Benefits of the Arts and Arts Therapies\n","program":["CADT"]}
    ,{"code":"CADT-UH 1058J","level":1000,"name":"CADT-UH 1058J How to Write from Life\n","program":["CADT"]}
    ,{"code":"CADT-UH 1059J","level":1000,"name":"CADT-UH 1059J Where Home is: Learning from the Living Room\n","program":["CADT"]}
    ,{"code":"CADT-UH 1060J","level":1000,"name":"CADT-UH 1060J Theory of the Digital\n","program":["CADT"]}
    ,{"code":"CADT-UH 1061J","level":1000,"name":"CADT-UH 1061J The Body Archive\n","program":["CADT"]}
    ,{"code":"CADT-UH 1062","level":1000,"name":"CADT-UH 1062 Contextual Innovation in Society\n","program":["CADT"]}
    ,{"code":"CADT-UH 1063","level":1000,"name":"CADT-UH 1063 Foodways for the Anthropocene\n","program":["CADT"]}
    ,{"code":"CCEA-UH 1000","level":1000,"name":"CCEA-UH 1000 Idea of the Portrait\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1001J","level":1000,"name":"CCEA-UH 1001J Ritual and Play\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1002J","level":1000,"name":"CCEA-UH 1002J Narrative, Media, and Technology\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1003","level":1000,"name":"CCEA-UH 1003 Collecting\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1004","level":1000,"name":"CCEA-UH 1004 Identity and Object\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1005","level":1000,"name":"CCEA-UH 1005 Abjection\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1006","level":1000,"name":"CCEA-UH 1006 Idea of the Garden\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1007","level":1000,"name":"CCEA-UH 1007 Abstraction\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1008","level":1000,"name":"CCEA-UH 1008 Artists' Writing\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1009X","level":1000,"name":"CCEA-UH 1009X A Thousand and One Nights\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1010","level":1000,"name":"CCEA-UH 1010 Imagined Cities\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1011","level":1000,"name":"CCEA-UH 1011 Law and the Imagination\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1012","level":1000,"name":"CCEA-UH 1012 Doubles and Masks\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1014","level":1000,"name":"CCEA-UH 1014 Money and the Good Life\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1015","level":1000,"name":"CCEA-UH 1015 Gender and Representation\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1016","level":1000,"name":"CCEA-UH 1016 Crime\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1017","level":1000,"name":"CCEA-UH 1017 On Violence\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1018","level":1000,"name":"CCEA-UH 1018 Imagination, Inspiration, and Prophecy\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1019","level":1000,"name":"CCEA-UH 1019 Novels That Changed the World\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1020","level":1000,"name":"CCEA-UH 1020 Art and Agency\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1021J","level":1000,"name":"CCEA-UH 1021J Jazz in New York\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1022J","level":1000,"name":"CCEA-UH 1022J Fascism, Antifascism, and Culture\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1023","level":1000,"name":"CCEA-UH 1023 Dis/Abilities in Musical Contexts\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1024J","level":1000,"name":"CCEA-UH 1024J Prague, Capital of Europe\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1025J","level":1000,"name":"CCEA-UH 1025J Experience of Art\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1026J","level":1000,"name":"CCEA-UH 1026J Shakespeare and Cosmopolitanism\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1037","level":1000,"name":"CCEA-UH 1037 Listening\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1042","level":1000,"name":"CCEA-UH 1042 Cosmopolitan Imagination\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1043","level":1000,"name":"CCEA-UH 1043 Technophilia and Its Discontents\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1044","level":1000,"name":"CCEA-UH 1044 Myth, Magic, and Representations of Childhood\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1046","level":1000,"name":"CCEA-UH 1046 Rogue Fictions: Tales of Tricksters, Outlaws, and Outsiders\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1047","level":1000,"name":"CCEA-UH 1047 Utopias and Dystopias\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1049","level":1000,"name":"CCEA-UH 1049 Knowledge and Doubt\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1051","level":1000,"name":"CCEA-UH 1051 Cultural Memory and Resistance\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1053","level":1000,"name":"CCEA-UH 1053 The Hero\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1054","level":1000,"name":"CCEA-UH 1054 Catastrophe into Art: Drama, Dissolution, and Philosophy\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1055","level":1000,"name":"CCEA-UH 1055 Global Shakespeare\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1056","level":1000,"name":"CCEA-UH 1056 Tragedy\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1057","level":1000,"name":"CCEA-UH 1057 Our Monsters, Ourselves\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1060","level":1000,"name":"CCEA-UH 1060 Photography and Narrative\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1061","level":1000,"name":"CCEA-UH 1061 Memory\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1062","level":1000,"name":"CCEA-UH 1062 Everything Is a Remix\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1063","level":1000,"name":"CCEA-UH 1063 Literary Translation\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1064X","level":1000,"name":"CCEA-UH 1064X Crisis and Creativity\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1065X","level":1000,"name":"CCEA-UH 1065X Nationalism, Art and Entertainment\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1068J","level":1000,"name":"CCEA-UH 1068J City of Encounters: Literatures of Indigeneity, Migration and Settlement\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1069","level":1000,"name":"CCEA-UH 1069 Cultural Appropriation\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1071J","level":1000,"name":"CCEA-UH 1071J Imagining the Renaissance City\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1072","level":1000,"name":"CCEA-UH 1072 Discovery and Recognition in Narrative, Film, and Drama\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1073J","level":1000,"name":"CCEA-UH 1073J Recovered Voices: Artistic and Musical Cultures from Prague to Theresienstadt\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1074","level":1000,"name":"CCEA-UH 1074 Interracial Literature\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1075","level":1000,"name":"CCEA-UH 1075 Life Underground\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1076","level":1000,"name":"CCEA-UH 1076 Gender and the Future of Normal\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1077X","level":1000,"name":"CCEA-UH 1077X Islamism, Islamophobia, and Muslim Popular Culture\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1078X","level":1000,"name":"CCEA-UH 1078X Representing the Middle East: Issues in the Politics of Culture\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1079J","level":1000,"name":"CCEA-UH 1079J Art, Education and Barbarism in Berlin\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1080X","level":1000,"name":"CCEA-UH 1080X Food, Culture, and Politics\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1081","level":1000,"name":"CCEA-UH 1081 Sense and Senses\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1082","level":1000,"name":"CCEA-UH 1082 Literature of Migration\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1083J","level":1000,"name":"CCEA-UH 1083J Falconry: Cultural Inheritance and Social Imaginary\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1085","level":1000,"name":"CCEA-UH 1085 Cinematic Imagination: Music, Media, and Modernity\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1086JX","level":1000,"name":"CCEA-UH 1086JX Pandemics in the Islamicate Middle East\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1087J","level":1000,"name":"CCEA-UH 1087J Confessional Culture from Augustine to Oprah\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1088J","level":1000,"name":"CCEA-UH 1088J Selves and Non-Selves in Arts Literatures and Films\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1089J","level":1000,"name":"CCEA-UH 1089J Gardens of Eden\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1090","level":1000,"name":"CCEA-UH 1090 Un/Making History\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1091","level":1000,"name":"CCEA-UH 1091 Narrating Migration\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1092","level":1000,"name":"CCEA-UH 1092 Reaching for the Stars\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1093","level":1000,"name":"CCEA-UH 1093 Attention\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1094X","level":1000,"name":"CCEA-UH 1094X Orientalisms\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1095JX","level":1000,"name":"CCEA-UH 1095JX Arabia Felix, the Imagined Land of 'Happiness'\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1096","level":1000,"name":"CCEA-UH 1096 Global Scents: All the Perfumes of Arabia\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1097","level":1000,"name":"CCEA-UH 1097 Music: Conflict, Protest, and Peace\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1099J","level":1000,"name":"CCEA-UH 1099J Coming to Grips With Theatre and Immigration\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1101J","level":1000,"name":"CCEA-UH 1101J Presence and Absence: The Work of Representation in a Southern African Setting\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1102J","level":1000,"name":"CCEA-UH 1102J Literature, Culture and Citizenship\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1103J","level":1000,"name":"CCEA-UH 1103J The Global Bible\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1104J","level":1000,"name":"CCEA-UH 1104J Music and Society: Fostering Belonging and Becoming\n","program":["CCEA"]}
    ,{"code":"CCEA-UH 1106J","level":1000,"name":"CCEA-UH 1106J Opera, Politics and Society from 1600 to the Present\n","program":["CCEA"]}
    ,{"code":"CCOL-UH 1000","level":1000,"name":"CCOL-UH 1000 Mortal and Immortal Questions\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1001","level":1000,"name":"CCOL-UH 1001 Dignity and Indignity\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1002","level":1000,"name":"CCOL-UH 1002 Indigeneity\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1003X","level":1000,"name":"CCOL-UH 1003X Faith in Science, Reason in Revelation\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1004","level":1000,"name":"CCOL-UH 1004 Migration: 20th- and 21st-Century Stories and Images\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1005","level":1000,"name":"CCOL-UH 1005 Wellness, Illness, and Everything in Between\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1006","level":1000,"name":"CCOL-UH 1006 Conserving Our Global Heritage through Science\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1007","level":1000,"name":"CCOL-UH 1007 What Do Leaders Do?\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1008","level":1000,"name":"CCOL-UH 1008 Reading the Earth\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1009","level":1000,"name":"CCOL-UH 1009 Subjectivity\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1010","level":1000,"name":"CCOL-UH 1010 Future of Medicine\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1012","level":1000,"name":"CCOL-UH 1012 Water: Rights and Resources\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1013","level":1000,"name":"CCOL-UH 1013 Colonialism and Postcolonialism\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1014","level":1000,"name":"CCOL-UH 1014 Justice in Theory and Practice\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1015Q","level":1000,"name":"CCOL-UH 1015Q Labor\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1016Q","level":1000,"name":"CCOL-UH 1016Q Cooperation\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1017","level":1000,"name":"CCOL-UH 1017 Reimagining Nature\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1018","level":1000,"name":"CCOL-UH 1018 Global Health Inequalities\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1019","level":1000,"name":"CCOL-UH 1019 Extinction\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1020","level":1000,"name":"CCOL-UH 1020 Water\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1021","level":1000,"name":"CCOL-UH 1021 The Desert\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1022Q","level":1000,"name":"CCOL-UH 1022Q Ethics and Politics of Public Health\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1024Q","level":1000,"name":"CCOL-UH 1024Q Life in the Universe\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1025","level":1000,"name":"CCOL-UH 1025 Human Body\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1026","level":1000,"name":"CCOL-UH 1026 Migration\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1027","level":1000,"name":"CCOL-UH 1027 Privacy in a Digital Society\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1028","level":1000,"name":"CCOL-UH 1028 Global Governance\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1029","level":1000,"name":"CCOL-UH 1029 Humanity and the Cosmos: Is There Room for Philosophy and Religion in a Scientific World?\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1030","level":1000,"name":"CCOL-UH 1030 War\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1031","level":1000,"name":"CCOL-UH 1031 Nature and Human Nature\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1032","level":1000,"name":"CCOL-UH 1032 Communication: from bacteria to humans\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1034","level":1000,"name":"CCOL-UH 1034 Gender\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1035","level":1000,"name":"CCOL-UH 1035 Inequality\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1036X","level":1000,"name":"CCOL-UH 1036X Postcolonial Memory: Representing Cultures of Displacement\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1038","level":1000,"name":"CCOL-UH 1038 Prejudice\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1039","level":1000,"name":"CCOL-UH 1039 Animal Perspectives\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1040","level":1000,"name":"CCOL-UH 1040 Disability\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1041","level":1000,"name":"CCOL-UH 1041 Atom and Energy\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1042","level":1000,"name":"CCOL-UH 1042 Multi-ethnic Democracy\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1043X","level":1000,"name":"CCOL-UH 1043X Religion, Revolution, Media\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1044","level":1000,"name":"CCOL-UH 1044 Contagion\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1045","level":1000,"name":"CCOL-UH 1045 Axes of Evil\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1046","level":1000,"name":"CCOL-UH 1046 Women and Leadership\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1048","level":1000,"name":"CCOL-UH 1048 Statehood\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1049","level":1000,"name":"CCOL-UH 1049 State of the Nation\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1050","level":1000,"name":"CCOL-UH 1050 Transnational Feminisms\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1051","level":1000,"name":"CCOL-UH 1051 Accidental Equality\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1052X","level":1000,"name":"CCOL-UH 1052X Art of Revolution\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1053","level":1000,"name":"CCOL-UH 1053 Calamity and Creation\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1054","level":1000,"name":"CCOL-UH 1054 Between Faith and Unbelief\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1055","level":1000,"name":"CCOL-UH 1055 Oil\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1056EQ","level":1000,"name":"CCOL-UH 1056EQ Fairness\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1057","level":1000,"name":"CCOL-UH 1057 Situated Self: Self and Relation to Others\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1058","level":1000,"name":"CCOL-UH 1058 Journeys\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1059Q","level":1000,"name":"CCOL-UH 1059Q Quantified Self\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1060","level":1000,"name":"CCOL-UH 1060 What Is Secularism?\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1061","level":1000,"name":"CCOL-UH 1061 Water for Life\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1062","level":1000,"name":"CCOL-UH 1062 Conviction and Doubt\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1063","level":1000,"name":"CCOL-UH 1063 Ethics and Activism\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1064","level":1000,"name":"CCOL-UH 1064 Can Cultural Traditions Endure?\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1065Q","level":1000,"name":"CCOL-UH 1065Q Resentment and Politics\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1069","level":1000,"name":"CCOL-UH 1069 Global Language: Communication and Conflict\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1070","level":1000,"name":"CCOL-UH 1070 Hindsight\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1071","level":1000,"name":"CCOL-UH 1071 Price of Luxury\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1072","level":1000,"name":"CCOL-UH 1072 Tolerance\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1073","level":1000,"name":"CCOL-UH 1073 Government: Theory and Practice\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1074","level":1000,"name":"CCOL-UH 1074 Industrial Revolutions and the Future of Work\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1075","level":1000,"name":"CCOL-UH 1075 Body Politics\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1076X","level":1000,"name":"CCOL-UH 1076X Foodways: Culture, Ethics, Sustainability\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1077","level":1000,"name":"CCOL-UH 1077 Food and Human Population\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1078","level":1000,"name":"CCOL-UH 1078 Who Owns Global Culture? Music, Networks, Law\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1079","level":1000,"name":"CCOL-UH 1079 Justice in Times of Transition\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1080","level":1000,"name":"CCOL-UH 1080 Learning Languages in a Global Society\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1081","level":1000,"name":"CCOL-UH 1081 Migration and Belonging\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1082","level":1000,"name":"CCOL-UH 1082 Multispecies Living and the Environmental Crisis\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1083X","level":1000,"name":"CCOL-UH 1083X Translation and Migration\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1085","level":1000,"name":"CCOL-UH 1085 What Am I? The Self and Subjectivity\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1086","level":1000,"name":"CCOL-UH 1086 Corruption\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1087","level":1000,"name":"CCOL-UH 1087 Black Internationalism\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1088","level":1000,"name":"CCOL-UH 1088 Panacea\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1089","level":1000,"name":"CCOL-UH 1089 Drama of Science\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1090","level":1000,"name":"CCOL-UH 1090 Ruins\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1091","level":1000,"name":"CCOL-UH 1091 Listening to/in the Anthropocene\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1093","level":1000,"name":"CCOL-UH 1093 Race & Caste\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1094","level":1000,"name":"CCOL-UH 1094 Fire\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1095","level":1000,"name":"CCOL-UH 1095 Emotions\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1096","level":1000,"name":"CCOL-UH 1096 Ghosts, Magic, and the Mystical: Understanding the Supernatural\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1097","level":1000,"name":"CCOL-UH 1097 The Sacred\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1098","level":1000,"name":"CCOL-UH 1098 Relation: The Poetics of Difference and Equality\n","program":["CCOL"]}
    ,{"code":"CCOL-UH 1099","level":1000,"name":"CCOL-UH 1099 The Science of Human Connection\n","program":["CCOL"]}
    ,{"code":"CDAD-UH 1001Q","level":1000,"name":"CDAD-UH 1001Q Data\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1002Q","level":1000,"name":"CDAD-UH 1002Q Space\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1004E","level":1000,"name":"CDAD-UH 1004E Microbes\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1005EJQ","level":1000,"name":"CDAD-UH 1005EJQ Forensic Science (Guilty or Not Guilty?)\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1006EJQ","level":1000,"name":"CDAD-UH 1006EJQ Coastal Urbanization and Environmental Change\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1007EQ","level":1000,"name":"CDAD-UH 1007EQ The Mind\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1008EQ","level":1000,"name":"CDAD-UH 1008EQ Seven Wonders of the Invisible World\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1009EJQ","level":1000,"name":"CDAD-UH 1009EJQ Behavior\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1010EJQ","level":1000,"name":"CDAD-UH 1010EJQ Diversity\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1011EQ","level":1000,"name":"CDAD-UH 1011EQ Observing the Universe\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1013EJ","level":1000,"name":"CDAD-UH 1013EJ Stem Cells: Immortality and Regeneration\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1014EJ","level":1000,"name":"CDAD-UH 1014EJ Social Chameleons\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1015J","level":1000,"name":"CDAD-UH 1015J Music and the Mind\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1016EQ","level":1000,"name":"CDAD-UH 1016EQ Where the City Meets the Sea: Studies in Coastal Urban Environments\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1017EQ","level":1000,"name":"CDAD-UH 1017EQ Symmetry\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1019Q","level":1000,"name":"CDAD-UH 1019Q Heat and the Universe\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1020EJQ","level":1000,"name":"CDAD-UH 1020EJQ Challenges in Global Health\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1021EJ","level":1000,"name":"CDAD-UH 1021EJ Neural Basis of the World’s Languages\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1022JQ","level":1000,"name":"CDAD-UH 1022JQ Sustainable Development\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1024Q","level":1000,"name":"CDAD-UH 1024Q Reading Like a Computer\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1025Q","level":1000,"name":"CDAD-UH 1025Q Numeracy\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1026EJ","level":1000,"name":"CDAD-UH 1026EJ Water, Energy, Food Nexus\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1027E","level":1000,"name":"CDAD-UH 1027E 5000 Years of Notable Lives: Measuring Influence across Cultures\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1030E","level":1000,"name":"CDAD-UH 1030E Better Living through Chemistry\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1032Q","level":1000,"name":"CDAD-UH 1032Q Stability\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1033EQ","level":1000,"name":"CDAD-UH 1033EQ Data and Human Space\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1034Q","level":1000,"name":"CDAD-UH 1034Q Numbers, Models, and Chaos\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1035J","level":1000,"name":"CDAD-UH 1035J Human Prehistory: A Unified Approach\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1036EJQ","level":1000,"name":"CDAD-UH 1036EJQ Community-Driven Development (CDD)\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1037","level":1000,"name":"CDAD-UH 1037 Cyberwarfare\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1038EJ","level":1000,"name":"CDAD-UH 1038EJ Evolution of Human Genomic Variation\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1039EQ","level":1000,"name":"CDAD-UH 1039EQ Search\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1040","level":1000,"name":"CDAD-UH 1040 Artificial Intelligence and Human Decisions\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1041EQ","level":1000,"name":"CDAD-UH 1041EQ Decisions and the Brain\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1043EQ","level":1000,"name":"CDAD-UH 1043EQ Data and Society\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1044Q","level":1000,"name":"CDAD-UH 1044Q Human-Centered Data Science\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1045EQ","level":1000,"name":"CDAD-UH 1045EQ Science of Food & Cooking\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1046Q","level":1000,"name":"CDAD-UH 1046Q Infectious Diseases: Preventing and Stopping Epidemics\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1048Q","level":1000,"name":"CDAD-UH 1048Q Microbial Self: Microbes and Identity\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1050EQ","level":1000,"name":"CDAD-UH 1050EQ Modeling Pandemics and Other Environmental Disturbances\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1051Q","level":1000,"name":"CDAD-UH 1051Q Humans: The Oddest Mammal\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1052J","level":1000,"name":"CDAD-UH 1052J Perspectives on Neurodiversity\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1053J","level":1000,"name":"CDAD-UH 1053J The Multilingual City: Linguistic Diversity in Abu Dhabi and Beyond\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1055EJQ","level":1000,"name":"CDAD-UH 1055EJQ Forensics\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1056J","level":1000,"name":"CDAD-UH 1056J Sexual and Reproductive Health: A Case Study of Uganda\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1059J","level":1000,"name":"CDAD-UH 1059J Extinction: Past, Present, and Prospects\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1060J","level":1000,"name":"CDAD-UH 1060J Researching Peace\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1061J","level":1000,"name":"CDAD-UH 1061J Digital Intimacies in and Beyond the Gulf\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1062J","level":1000,"name":"CDAD-UH 1062J Long Live the Queen: The Evolution of Animal Form and Behavior\n","program":["CDAD"]}
    ,{"code":"CDAD-UH 1063","level":1000,"name":"CDAD-UH 1063 Digital Archive\n","program":["CDAD"]}
    ,{"code":"CHEM-UH 2010","level":2000,"name":"CHEM-UH 2010 Organic Chemistry 1\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 2050","level":2000,"name":"CHEM-UH 2050 Organic Chemistry 1 Lab\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 2201","level":2000,"name":"CHEM-UH 2201 Advanced Materials\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 3010","level":3000,"name":"CHEM-UH 3010 Organic Chemistry 2\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 3011","level":3000,"name":"CHEM-UH 3011 Physical Chemistry: Thermodynamics and Kinetics\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 3012","level":3000,"name":"CHEM-UH 3012 Physical Chemistry Laboratory: Thermodynamics and Kinetics\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 3013","level":3000,"name":"CHEM-UH 3013 Physical Chemistry: Quantum Mechanics and Spectroscopy\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 3014","level":3000,"name":"CHEM-UH 3014 Physical Chemistry Laboratory: Quantum Mechanics and Spectroscopy\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 3015","level":3000,"name":"CHEM-UH 3015 Inorganic Chemistry\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 3016","level":3000,"name":"CHEM-UH 3016 Analytical Chemistry\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 3020","level":3000,"name":"CHEM-UH 3020 Biochemistry: Macromolecular Structure and Function\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 3021","level":3000,"name":"CHEM-UH 3021 Biochemistry: Metabolism\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 3022","level":3000,"name":"CHEM-UH 3022 Biochemistry: Experimental Biochemistry\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 3090","level":3000,"name":"CHEM-UH 3090 Research Seminar in Chemistry\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 3101","level":3000,"name":"CHEM-UH 3101 Physical Chemistry for the Life Sciences\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 3260","level":3000,"name":"CHEM-UH 3260 Special Topics in Chemistry\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 4001","level":4000,"name":"CHEM-UH 4001 Capstone Project in Chemistry 1\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 4002","level":4000,"name":"CHEM-UH 4002 Capstone Project in Chemistry 2\n","program":["CHEM"]}
    ,{"code":"CHEM-UH 4212","level":4000,"name":"CHEM-UH 4212 Advanced Organic Chemistry\n","program":["CHEM"]}
    ,{"code":"CHINL-UH 1101","level":1000,"name":"CHINL-UH 1101 Elementary Chinese 1\n","program":["CHINL"]}
    ,{"code":"CHINL-UH 1102","level":1000,"name":"CHINL-UH 1102 Elementary Chinese 2\n","program":["CHINL"]}
    ,{"code":"CHINL-UH 2001","level":2000,"name":"CHINL-UH 2001 Intermediate Chinese 1\n","program":["CHINL"]}
    ,{"code":"CHINL-UH 2002","level":2000,"name":"CHINL-UH 2002 Intermediate Chinese 2\n","program":["CHINL"]}
    ,{"code":"CHINL-UH 3001","level":3000,"name":"CHINL-UH 3001 Advanced Chinese 1\n","program":["CHINL"]}
    ,{"code":"CHINL-UH 3002","level":3000,"name":"CHINL-UH 3002 Advanced Chinese 2\n","program":["CHINL"]}
    ,{"code":"CS-UH 1001","level":1000,"name":"CS-UH 1001 Introduction to Computer Science\n","program":["CS"]}
    ,{"code":"CS-UH 1002","level":1000,"name":"CS-UH 1002 Discrete Mathematics\n","program":["CS"]}
    ,{"code":"CS-UH 1050","level":1000,"name":"CS-UH 1050 Data Structures\n","program":["CS"]}
    ,{"code":"CS-UH 1052","level":1000,"name":"CS-UH 1052 Algorithms\n","program":["CS"]}
    ,{"code":"CS-UH 2010","level":2000,"name":"CS-UH 2010 Computer Systems Organization\n","program":["CS"]}
    ,{"code":"CS-UH 2012","level":2000,"name":"CS-UH 2012 Software Engineering\n","program":["CS"]}
    ,{"code":"CS-UH 2213","level":2000,"name":"CS-UH 2213 Artificial Intelligence\n","program":["CS"]}
    ,{"code":"CS-UH 2214","level":2000,"name":"CS-UH 2214 Database Systems\n","program":["CS"]}
    ,{"code":"CS-UH 2215","level":2000,"name":"CS-UH 2215 Computer Graphics\n","program":["CS"]}
    ,{"code":"CS-UH 2216","level":2000,"name":"CS-UH 2216 Natural Language Processing\n","program":["CS"]}
    ,{"code":"CS-UH 2218","level":2000,"name":"CS-UH 2218 Algorithmic Foundations of Data Science\n","program":["CS"]}
    ,{"code":"CS-UH 2219E","level":2000,"name":"CS-UH 2219E Computational Social Science\n","program":["CS"]}
    ,{"code":"CS-UH 2220","level":2000,"name":"CS-UH 2220 Machine Learning\n","program":["CS"]}
    ,{"code":"CS-UH 3010","level":3000,"name":"CS-UH 3010 Operating Systems\n","program":["CS"]}
    ,{"code":"CS-UH 3012","level":3000,"name":"CS-UH 3012 Computer Networks\n","program":["CS"]}
    ,{"code":"CS-UH 3090","level":3000,"name":"CS-UH 3090 Research Seminar in Computer Science\n","program":["CS"]}
    ,{"code":"CS-UH 3210","level":3000,"name":"CS-UH 3210 Computer Security\n","program":["CS"]}
    ,{"code":"CS-UH 3260","level":3000,"name":"CS-UH 3260 Special Topics in Computer Science\n","program":["CS"]}
    ,{"code":"CS-UH 4001","level":4000,"name":"CS-UH 4001 Capstone Project in Computer Science 1\n","program":["CS"]}
    ,{"code":"CS-UH 4002","level":4000,"name":"CS-UH 4002 Capstone Project in Computer Science 2\n","program":["CS"]}
    ,{"code":"CSTS-UH 1001","level":1000,"name":"CSTS-UH 1001 Quantum Theory and Relativity: The Impact of a Scientific Revolution\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1002J","level":1000,"name":"CSTS-UH 1002J State and Fate of Earth\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1003Q","level":1000,"name":"CSTS-UH 1003Q What Is a Number?\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1004J","level":1000,"name":"CSTS-UH 1004J Science in Flux: The Galilean Revolution\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1005Q","level":1000,"name":"CSTS-UH 1005Q About Mathematics\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1006","level":1000,"name":"CSTS-UH 1006 Thinking\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1007Q","level":1000,"name":"CSTS-UH 1007Q Chance\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1008","level":1000,"name":"CSTS-UH 1008 Birth of Science\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1009","level":1000,"name":"CSTS-UH 1009 Theory of Everything\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1010","level":1000,"name":"CSTS-UH 1010 Astronomy & Cosmology: From Big Bang to Multiverse\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1012","level":1000,"name":"CSTS-UH 1012 Wealth of Nations\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1013J","level":1000,"name":"CSTS-UH 1013J Relationship of Government and Religion\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1014","level":1000,"name":"CSTS-UH 1014 Gender and Globalization\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1015","level":1000,"name":"CSTS-UH 1015 Legitimacy\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1016","level":1000,"name":"CSTS-UH 1016 Ideas of the Sacred\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1017","level":1000,"name":"CSTS-UH 1017 Revolutions and Social Change\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1019J","level":1000,"name":"CSTS-UH 1019J Aristocrats\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1020J","level":1000,"name":"CSTS-UH 1020J Surveillance and Privacy\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1021EQ","level":1000,"name":"CSTS-UH 1021EQ Boundaries\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1022","level":1000,"name":"CSTS-UH 1022 Internationalism\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1023J","level":1000,"name":"CSTS-UH 1023J Democracy and Its Critics\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1024J","level":1000,"name":"CSTS-UH 1024J Sovereignty\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1026J","level":1000,"name":"CSTS-UH 1026J Children and Childhood: Medical, Historical, and Cultural Perspectives\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1029J","level":1000,"name":"CSTS-UH 1029J Idea of the University\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1030J","level":1000,"name":"CSTS-UH 1030J Global Perspectives on Inequality\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1031","level":1000,"name":"CSTS-UH 1031 Why Is It So Hard to Do Good?\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1032J","level":1000,"name":"CSTS-UH 1032J City in Crisis: Refuge and Resilience\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1033J","level":1000,"name":"CSTS-UH 1033J Culture and Context in Psychology\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1034","level":1000,"name":"CSTS-UH 1034 Idea of the Cell\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1039","level":1000,"name":"CSTS-UH 1039 Property\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1041","level":1000,"name":"CSTS-UH 1041 Ideology\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1043","level":1000,"name":"CSTS-UH 1043 Great Divergence\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1047","level":1000,"name":"CSTS-UH 1047 The Body\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1048","level":1000,"name":"CSTS-UH 1048 Money\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1049","level":1000,"name":"CSTS-UH 1049 Concepts and Categories: How We Structure the World\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1050Q","level":1000,"name":"CSTS-UH 1050Q Uncertainty in Science\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1052X","level":1000,"name":"CSTS-UH 1052X History and the Environment: The Middle East\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1053","level":1000,"name":"CSTS-UH 1053 Understanding Urbanization\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1054J","level":1000,"name":"CSTS-UH 1054J Green Mobility and Cities\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1055J","level":1000,"name":"CSTS-UH 1055J Is Liberalism Dead?\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1056J","level":1000,"name":"CSTS-UH 1056J Protecting the World's Health: Triumphs and Challenges\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1057J","level":1000,"name":"CSTS-UH 1057J Religion and the Boundaries of Tolerance\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1058JX","level":1000,"name":"CSTS-UH 1058JX God or Reason? The Controversy over Law\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1059X","level":1000,"name":"CSTS-UH 1059X Urban Violence: The Middle East\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1060","level":1000,"name":"CSTS-UH 1060 Religion and Philosophy\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1061","level":1000,"name":"CSTS-UH 1061 Global Ethics\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1062","level":1000,"name":"CSTS-UH 1062 Urbanization and Development\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1063","level":1000,"name":"CSTS-UH 1063 Power, Domination, and Resistance\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1064J","level":1000,"name":"CSTS-UH 1064J Well-Being and the Design of the Built Environment\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1066","level":1000,"name":"CSTS-UH 1066 Feminist Theory in a Globalizing Context\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1067","level":1000,"name":"CSTS-UH 1067 Moving Target\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1069Q","level":1000,"name":"CSTS-UH 1069Q Biology of Politics\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1070J","level":1000,"name":"CSTS-UH 1070J Justice, Membership, and Migration\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1071J","level":1000,"name":"CSTS-UH 1071J Biotechnology and Society\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1072J","level":1000,"name":"CSTS-UH 1072J Surveillance, Sousveillance, and the Politics of Memory and Space\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1073","level":1000,"name":"CSTS-UH 1073 Law, Media and Changing International World Order\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1074","level":1000,"name":"CSTS-UH 1074 Refugees, Law and Crises\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1075X","level":1000,"name":"CSTS-UH 1075X Exploring UAE Cities\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1076","level":1000,"name":"CSTS-UH 1076 What Is Property? (And What Is It For?)\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1077","level":1000,"name":"CSTS-UH 1077 Law and Politics\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1078","level":1000,"name":"CSTS-UH 1078 Networks\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1079","level":1000,"name":"CSTS-UH 1079 Language and Society\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1080J","level":1000,"name":"CSTS-UH 1080J Environmental Justice and Urban Inequality\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1081J","level":1000,"name":"CSTS-UH 1081J What is a Religion?\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1083J","level":1000,"name":"CSTS-UH 1083J Year of Tolerance\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1084J","level":1000,"name":"CSTS-UH 1084J Art and Science of Parenting: Impact on Education, Health, and Mental Health\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1086J","level":1000,"name":"CSTS-UH 1086J Nation and Empire\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1087","level":1000,"name":"CSTS-UH 1087 Future of Education\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1088","level":1000,"name":"CSTS-UH 1088 Thinking Big About the Ancient World\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1089J","level":1000,"name":"CSTS-UH 1089J Migration: Crisis or Norm?\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1090J","level":1000,"name":"CSTS-UH 1090J Where Did We Come From?\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1091J","level":1000,"name":"CSTS-UH 1091J Disability, Technology, and Media\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1092J","level":1000,"name":"CSTS-UH 1092J Deviance, Crime and Punishment\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1093J","level":1000,"name":"CSTS-UH 1093J Cultures of Addiction: A BioSocial View\n","program":["CSTS"]}
    ,{"code":"CSTS-UH 1094J","level":1000,"name":"CSTS-UH 1094J Space Diplomacy\n","program":["CSTS"]}
    ,{"code":"ECON-GH 5000","level":5000,"name":"ECON-GH 5000 Math Camp\n","program":["ECON"]}
    ,{"code":"ECON-GH 5100","level":5000,"name":"ECON-GH 5100 Microeconomics 1\n","program":["ECON"]}
    ,{"code":"ECON-GH 5120","level":5000,"name":"ECON-GH 5120 Microeconomics 2\n","program":["ECON"]}
    ,{"code":"ECON-GH 5200","level":5000,"name":"ECON-GH 5200 Mathematical Statistics and Probability\n","program":["ECON"]}
    ,{"code":"ECON-GH 5210","level":5000,"name":"ECON-GH 5210 Econometrics\n","program":["ECON"]}
    ,{"code":"ECON-GH 5220","level":5000,"name":"ECON-GH 5220 Empirical Economics\n","program":["ECON"]}
    ,{"code":"ECON-GH 5310","level":5000,"name":"ECON-GH 5310 Behavioral Economics\n","program":["ECON"]}
    ,{"code":"ECON-GH 5410","level":5000,"name":"ECON-GH 5410 Economics of International Development\n","program":["ECON"]}
    ,{"code":"ECON-GH 5600","level":5000,"name":"ECON-GH 5600 Macroeconomics\n","program":["ECON"]}
    ,{"code":"ECON-GH 5620","level":5000,"name":"ECON-GH 5620 Macroeconomics 2\n","program":["ECON"]}
    ,{"code":"ECON-GH 5900","level":5000,"name":"ECON-GH 5900 Mathematics 1\n","program":["ECON"]}
    ,{"code":"ECON-GH 5920","level":5000,"name":"ECON-GH 5920 Mathematics 2\n","program":["ECON"]}
    ,{"code":"ECON-GH 5950","level":5000,"name":"ECON-GH 5950 Introduction to Computer Programming\n","program":["ECON"]}
    ,{"code":"ECON-GH 5960","level":5000,"name":"ECON-GH 5960 Numerical Methods\n","program":["ECON"]}
    ,{"code":"ECON-GH 5970","level":5000,"name":"ECON-GH 5970 The Network Economy\n","program":["ECON"]}
    ,{"code":"ECON-GH 6000","level":6000,"name":"ECON-GH 6000 Final Project\n","program":["ECON"]}
    ,{"code":"ECON-UH 1112","level":1000,"name":"ECON-UH 1112 Principles of Macroeconomics\n","program":["ECON"]}
    ,{"code":"ECON-UH 1410J","level":1000,"name":"ECON-UH 1410J Research Design, Fieldwork, and Data Analysis for Development Economics\n","program":["ECON"]}
    ,{"code":"ECON-UH 1501","level":1000,"name":"ECON-UH 1501 Managerial Economics\n","program":["ECON"]}
    ,{"code":"ECON-UH 1701","level":1000,"name":"ECON-UH 1701 Economics of Gender\n","program":["ECON"]}
    ,{"code":"ECON-UH 2010","level":2000,"name":"ECON-UH 2010 Intermediate Microeconomics\n","program":["ECON"]}
    ,{"code":"ECON-UH 2020","level":2000,"name":"ECON-UH 2020 Data Analysis: Economics\n","program":["ECON"]}
    ,{"code":"ECON-UH 2030","level":2000,"name":"ECON-UH 2030 Intermediate Macroeconomics\n","program":["ECON"]}
    ,{"code":"ECON-UH 2310EQ","level":2000,"name":"ECON-UH 2310EQ Behavioral Economics\n","program":["ECON"]}
    ,{"code":"ECON-UH 2320E","level":2000,"name":"ECON-UH 2320E Experimental Economics\n","program":["ECON"]}
    ,{"code":"ECON-UH 2321J","level":2000,"name":"ECON-UH 2321J Economic Rationality and Behavior\n","program":["ECON"]}
    ,{"code":"ECON-UH 2322E","level":2000,"name":"ECON-UH 2322E Neuropsychoeconomics\n","program":["ECON"]}
    ,{"code":"ECON-UH 2410","level":2000,"name":"ECON-UH 2410 Development Economics\n","program":["ECON"]}
    ,{"code":"ECON-UH 2411","level":2000,"name":"ECON-UH 2411 Technology and Economic Development: Markets and Networks\n","program":["ECON"]}
    ,{"code":"ECON-UH 2451X","level":2000,"name":"ECON-UH 2451X Economic History of the Middle East\n","program":["ECON"]}
    ,{"code":"ECON-UH 2502J","level":2000,"name":"ECON-UH 2502J Household Finance\n","program":["ECON"]}
    ,{"code":"ECON-UH 2510","level":2000,"name":"ECON-UH 2510 Foundations of Financial Markets\n","program":["ECON"]}
    ,{"code":"ECON-UH 2511","level":2000,"name":"ECON-UH 2511 Financial Systems\n","program":["ECON"]}
    ,{"code":"ECON-UH 2512","level":2000,"name":"ECON-UH 2512 FinTech Innovation: Finance, Technology, Regulation\n","program":["ECON"]}
    ,{"code":"ECON-UH 2513J","level":2000,"name":"ECON-UH 2513J Social Entrepreneurship for Economic Development (SEED): India\n","program":["ECON"]}
    ,{"code":"ECON-UH 2514","level":2000,"name":"ECON-UH 2514 Economics of Sovereign Wealth Funds\n","program":["ECON"]}
    ,{"code":"ECON-UH 2610","level":2000,"name":"ECON-UH 2610 International Economics\n","program":["ECON"]}
    ,{"code":"ECON-UH 2621J","level":2000,"name":"ECON-UH 2621J Crises, Policies and their Aftermath\n","program":["ECON"]}
    ,{"code":"ECON-UH 2710","level":2000,"name":"ECON-UH 2710 Labor Economics\n","program":["ECON"]}
    ,{"code":"ECON-UH 2711","level":2000,"name":"ECON-UH 2711 Health Economics\n","program":["ECON"]}
    ,{"code":"ECON-UH 2922","level":2000,"name":"ECON-UH 2922 Industrial Organization\n","program":["ECON"]}
    ,{"code":"ECON-UH 3010","level":3000,"name":"ECON-UH 3010 Economics of Imperfect Markets\n","program":["ECON"]}
    ,{"code":"ECON-UH 3030","level":3000,"name":"ECON-UH 3030 Economic Growth\n","program":["ECON"]}
    ,{"code":"ECON-UH 3210","level":3000,"name":"ECON-UH 3210 Quantitative Methods of Applied Economics\n","program":["ECON"]}
    ,{"code":"ECON-UH 3310EJ","level":3000,"name":"ECON-UH 3310EJ Economic Decisions and the Brain\n","program":["ECON"]}
    ,{"code":"ECON-UH 3450","level":3000,"name":"ECON-UH 3450 A History of the Modern World Economy\n","program":["ECON"]}
    ,{"code":"ECON-UH 3460","level":3000,"name":"ECON-UH 3460 Poverty\n","program":["ECON"]}
    ,{"code":"ECON-UH 3511X","level":3000,"name":"ECON-UH 3511X Islamic Economics and Finance\n","program":["ECON"]}
    ,{"code":"ECON-UH 3512","level":3000,"name":"ECON-UH 3512 Global Asset Allocation\n","program":["ECON"]}
    ,{"code":"ECON-UH 3513","level":3000,"name":"ECON-UH 3513 Advanced Investments\n","program":["ECON"]}
    ,{"code":"ECON-UH 3520","level":3000,"name":"ECON-UH 3520 Corporate Finance\n","program":["ECON"]}
    ,{"code":"ECON-UH 3521","level":3000,"name":"ECON-UH 3521 Asset Pricing and Derivatives\n","program":["ECON"]}
    ,{"code":"ECON-UH 3600","level":3000,"name":"ECON-UH 3600 Topics in International and Macroeconomics\n","program":["ECON"]}
    ,{"code":"ECON-UH 3630","level":3000,"name":"ECON-UH 3630 Public Economics\n","program":["ECON"]}
    ,{"code":"ECON-UH 3710","level":3000,"name":"ECON-UH 3710 Economics of Education\n","program":["ECON"]}
    ,{"code":"ECON-UH 3910","level":3000,"name":"ECON-UH 3910 Advanced Microeconomics\n","program":["ECON"]}
    ,{"code":"ECON-UH 3912","level":3000,"name":"ECON-UH 3912 Economics of Networks\n","program":["ECON"]}
    ,{"code":"ECON-UH 3913","level":3000,"name":"ECON-UH 3913 Market Design\n","program":["ECON"]}
    ,{"code":"ECON-UH 3940","level":3000,"name":"ECON-UH 3940 Advanced Macroeconomics\n","program":["ECON"]}
    ,{"code":"ECON-UH 4000","level":4000,"name":"ECON-UH 4000 Economic Policy\n","program":["ECON"]}
    ,{"code":"ECON-UH 4020","level":4000,"name":"ECON-UH 4020 Capstone Seminar\n","program":["ECON"]}
    ,{"code":"ECON-UH 4099","level":4000,"name":"ECON-UH 4099 Capstone Project\n","program":["ECON"]}
    ,{"code":"ECON-UH 4210","level":4000,"name":"ECON-UH 4210 Advanced Econometrics\n","program":["ECON"]}
    ,{"code":"EDUC-UH 1001J","level":1000,"name":"EDUC-UH 1001J International Peacebuilding and the Role of Education\n","program":["EDUC"]}
    ,{"code":"ENGR-GH 6422","level":6000,"name":"ENGR-GH 6422 Data Analysis for Urban Systems\n","program":["ENGR"]}
    ,{"code":"ENGR-GH 7900","level":7000,"name":"ENGR-GH 7900 Graduate Seminar Series\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 1000","level":1000,"name":"ENGR-UH 1000 Computer Programming for Engineers\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 1010","level":1000,"name":"ENGR-UH 1010 Engineering Ethics\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 1021J","level":1000,"name":"ENGR-UH 1021J Design and Innovation\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 1801","level":1000,"name":"ENGR-UH 1801 Bioengineering Principles\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2010Q","level":2000,"name":"ENGR-UH 2010Q Probability and Statistics for Engineers\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2011","level":2000,"name":"ENGR-UH 2011 Engineering Statics\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2012","level":2000,"name":"ENGR-UH 2012 Conservation Laws in Engineering\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2013","level":2000,"name":"ENGR-UH 2013 Digital Logic\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2014E","level":2000,"name":"ENGR-UH 2014E Experimental Methods\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2017","level":2000,"name":"ENGR-UH 2017 Numerical Methods\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2019","level":2000,"name":"ENGR-UH 2019 Circuits Fundamentals\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2025","level":2000,"name":"ENGR-UH 2025 Fundamentals of Discrete Math\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2026","level":2000,"name":"ENGR-UH 2026 Partial Differential Equations for Engineers\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2028","level":2000,"name":"ENGR-UH 2028 Tissue Engineering\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2112","level":2000,"name":"ENGR-UH 2112 Engineers for Social Impact\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2113","level":2000,"name":"ENGR-UH 2113 Introduction to Manufacturing Processes\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2210","level":2000,"name":"ENGR-UH 2210 Engineering Dynamics\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2211","level":2000,"name":"ENGR-UH 2211 Solid Mechanics\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2212","level":2000,"name":"ENGR-UH 2212 Fluid Mechanics\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2310","level":2000,"name":"ENGR-UH 2310 Advanced Digital Logic\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2311","level":2000,"name":"ENGR-UH 2311 Advanced Circuits\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2510","level":2000,"name":"ENGR-UH 2510 Object-Oriented Programming\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2610","level":2000,"name":"ENGR-UH 2610 Fundamentals of Complex Variables\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2810","level":2000,"name":"ENGR-UH 2810 Biomechanics\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2811","level":2000,"name":"ENGR-UH 2811 Biotransport Phenomena\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 2812","level":2000,"name":"ENGR-UH 2812 Bioimaging\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3110","level":3000,"name":"ENGR-UH 3110 Instrumentation, Sensors, Actuators\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3111","level":3000,"name":"ENGR-UH 3111 Analysis of Chemical and Biological Processes\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3120","level":3000,"name":"ENGR-UH 3120 Engineering Materials\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3130","level":3000,"name":"ENGR-UH 3130 Quantitative Synthetic Biology\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3210","level":3000,"name":"ENGR-UH 3210 Structural Components Analysis\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3230","level":3000,"name":"ENGR-UH 3230 Finite Element Modeling and Analysis\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3331","level":3000,"name":"ENGR-UH 3331 Computer Vision\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3332","level":3000,"name":"ENGR-UH 3332 Applied Machine Learning\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3410","level":3000,"name":"ENGR-UH 3410 Structural Systems\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3411","level":3000,"name":"ENGR-UH 3411 Environmental Engineering\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3412","level":3000,"name":"ENGR-UH 3412 Geotechnical Engineering\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3413","level":3000,"name":"ENGR-UH 3413 Transportation and Traffic Engineering\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3420","level":3000,"name":"ENGR-UH 3420 Project Management\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3430","level":3000,"name":"ENGR-UH 3430 Steel Structures Design\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3431","level":3000,"name":"ENGR-UH 3431 Concrete Structures Design\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3432","level":3000,"name":"ENGR-UH 3432 Water and Wastewater Systems Design\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3450","level":3000,"name":"ENGR-UH 3450 Geographic Information System\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3510","level":3000,"name":"ENGR-UH 3510 Data Structures and Algorithms\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3511","level":3000,"name":"ENGR-UH 3511 Computer Organization and Architecture\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3512","level":3000,"name":"ENGR-UH 3512 Computer Networks\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3530","level":3000,"name":"ENGR-UH 3530 Embedded Systems\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3610","level":3000,"name":"ENGR-UH 3610 Signals and Systems\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3611","level":3000,"name":"ENGR-UH 3611 Electronics\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3613","level":3000,"name":"ENGR-UH 3613 Electromagnetics\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3620","level":3000,"name":"ENGR-UH 3620 Analog and Digital Communication Theory\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3710","level":3000,"name":"ENGR-UH 3710 Thermodynamics\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3720","level":3000,"name":"ENGR-UH 3720 Computer-Aided Design\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3730","level":3000,"name":"ENGR-UH 3730 Modeling and Analysis of Dynamical Systems\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3750","level":3000,"name":"ENGR-UH 3750 Vibrations\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3751","level":3000,"name":"ENGR-UH 3751 Heat Transport\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 3810","level":3000,"name":"ENGR-UH 3810 Quantitative Physiology\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4010","level":4000,"name":"ENGR-UH 4010 Senior Capstone Seminar\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4011","level":4000,"name":"ENGR-UH 4011 Senior Design Capstone Project I\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4020","level":4000,"name":"ENGR-UH 4020 Senior Design Capstone Project II\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4141","level":4000,"name":"ENGR-UH 4141 Fundamentals and Applications of MEMS\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4142","level":4000,"name":"ENGR-UH 4142 Bio-sensors and Bio-chips\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4160","level":4000,"name":"ENGR-UH 4160 Selected Topics in Biomedical and Health Systems\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4230","level":4000,"name":"ENGR-UH 4230 Applied Optimization\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4330","level":4000,"name":"ENGR-UH 4330 Robotics\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4420","level":4000,"name":"ENGR-UH 4420 Urban Infrastructure Systems\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4423","level":4000,"name":"ENGR-UH 4423 Production and Logistics Management\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4424","level":4000,"name":"ENGR-UH 4424 Introduction to Information Management and Modeling for Construction\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4431","level":4000,"name":"ENGR-UH 4431 Foundation Engineering Design\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4434","level":4000,"name":"ENGR-UH 4434 Water Desalination Engineering\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4460","level":4000,"name":"ENGR-UH 4460 Selected Topics in Urban Systems\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4560","level":4000,"name":"ENGR-UH 4560 Selected Topics in Information and Computational Systems\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4610","level":4000,"name":"ENGR-UH 4610 Control Systems Engineering\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4701","level":4000,"name":"ENGR-UH 4701 Electrochemical Energy Devices\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4710","level":4000,"name":"ENGR-UH 4710 Thermal Energy Systems\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4711","level":4000,"name":"ENGR-UH 4711 Compressible Flow\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4760","level":4000,"name":"ENGR-UH 4760 Selected Topics in Mechanical Engineering\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4770","level":4000,"name":"ENGR-UH 4770 Micro-power Generation\n","program":["ENGR"]}
    ,{"code":"ENGR-UH 4810","level":4000,"name":"ENGR-UH 4810 Biomaterials\n","program":["ENGR"]}
    ,{"code":"ENGRN-UH 1112J","level":1000,"name":"ENGRN-UH 1112J Human + Machine: Applications in Mediated Reality\n","program":["ENGRN"]}
    ,{"code":"ENVR-UH 1111","level":1,"name":"ENVR-UH 1111 Global Climate Change\n","program":["ENVR"]}
    ,{"code":"ENVR-UH 1312","level":1000,"name":"ENVR-UH 1312 Global Debate on Green Growth\n","program":["ENVR"]}
    ,{"code":"FILMM-UH 1010","level":1000,"name":"FILMM-UH 1010 Sound, Image, and Story\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1011","level":1000,"name":"FILMM-UH 1011 Concepts of Film and New Media\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1012","level":1000,"name":"FILMM-UH 1012 Forms of Writing for the Screen\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1013X","level":1000,"name":"FILMM-UH 1013X Understanding MENASA Film and New Media\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1111","level":1,"name":"FILMM-UH 1111 Frames of World Cinema: 1960 to present\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1117J","level":1000,"name":"FILMM-UH 1117J War and Cinema\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1118J","level":1000,"name":"FILMM-UH 1118J Shanghai Cinema Legacy\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1119J","level":1000,"name":"FILMM-UH 1119J Socialism on Screen\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1120J","level":1000,"name":"FILMM-UH 1120J Media and Memory\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1510","level":1000,"name":"FILMM-UH 1510 Techniques for Safety and Production\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1512","level":1000,"name":"FILMM-UH 1512 Writing the Short Screenplay\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1513","level":1000,"name":"FILMM-UH 1513 Directing the Non-actor: Singular Drama\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1514","level":1000,"name":"FILMM-UH 1514 Cinematography: Art & Craft\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1515J","level":1000,"name":"FILMM-UH 1515J Audiovisual Ethnography: Music and Heritage in Zanzibar\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1516","level":1000,"name":"FILMM-UH 1516 Producing the Short Film\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1517","level":1000,"name":"FILMM-UH 1517 Production Sound for Film and New Media\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1518J","level":1000,"name":"FILMM-UH 1518J Storyfying Cultural Experiences and Exchanges\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1910","level":1000,"name":"FILMM-UH 1910 Docu-Fiction\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1911","level":1000,"name":"FILMM-UH 1911 Introduction to Documentary Film\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 1912","level":1000,"name":"FILMM-UH 1912 Practices of Documentary Filmmaking: Record and Representation\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 2510","level":2000,"name":"FILMM-UH 2510 Intermediate Filmmaking\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 2511","level":2000,"name":"FILMM-UH 2511 Episodic Storytelling\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 2513","level":2000,"name":"FILMM-UH 2513 Principles of Post-Production for Film and Video\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 3110","level":3000,"name":"FILMM-UH 3110 Archives, Methods, Screens\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 3511","level":3000,"name":"FILMM-UH 3511 Advanced Filmmaking\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 4110","level":4000,"name":"FILMM-UH 4110 Film and New Media Studies Capstone Seminar\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 4501","level":4000,"name":"FILMM-UH 4501 Film and New Media Practice Capstone Seminar\n","program":["FILMM"]}
    ,{"code":"FILMM-UH 4901","level":4000,"name":"FILMM-UH 4901 Film & New Media Capstone Project\n","program":["FILMM"]}
    ,{"code":"FRENL-UH 1101","level":1000,"name":"FRENL-UH 1101 Elementary French 1\n","program":["FRENL"]}
    ,{"code":"FRENL-UH 1102","level":1000,"name":"FRENL-UH 1102 Elementary French 2\n","program":["FRENL"]}
    ,{"code":"FRENL-UH 2001","level":2000,"name":"FRENL-UH 2001 Intermediate French 1\n","program":["FRENL"]}
    ,{"code":"FRENL-UH 2002","level":2000,"name":"FRENL-UH 2002 Intermediate French 2\n","program":["FRENL"]}
    ,{"code":"FRENL-UH 3000","level":3000,"name":"FRENL-UH 3000 Advanced French\n","program":["FRENL"]}
    ,{"code":"HERST-UH 1100","level":1000,"name":"HERST-UH 1100 World Heritage Sites & Universal Collections\n","program":["HERST"]}
    ,{"code":"HERST-UH 1101X","level":1000,"name":"HERST-UH 1101X Heritage Management in the Arabian World\n","program":["HERST"]}
    ,{"code":"HERST-UH 1301J","level":1000,"name":"HERST-UH 1301J Cultural Heritage in Conflict Zones and the Responsibility to Protect\n","program":["HERST"]}
    ,{"code":"HERST-UH 1500","level":1000,"name":"HERST-UH 1500 Shipwrecks and Seascapes\n","program":["HERST"]}
    ,{"code":"HERST-UH 1501","level":1000,"name":"HERST-UH 1501 Experimenting with the Past: Cultural Heritage Connections in the Gulf and Western Indian Ocean\n","program":["HERST"]}
    ,{"code":"HERST-UH 1502","level":1000,"name":"HERST-UH 1502 Judging Heritage: Cultural Property Law and Preservation Policies\n","program":["HERST"]}
    ,{"code":"HERST-UH 2301J","level":2000,"name":"HERST-UH 2301J Museum History, Theory, and Practice: Case Study, Florence\n","program":["HERST"]}
    ,{"code":"HIST-UH 1105","level":1000,"name":"HIST-UH 1105 Africa in the World\n","program":["HIST"]}
    ,{"code":"HIST-UH 1106","level":1000,"name":"HIST-UH 1106 China in the World\n","program":["HIST"]}
    ,{"code":"HIST-UH 1110","level":1000,"name":"HIST-UH 1110 Colonial Latin America and the Atlantic World\n","program":["HIST"]}
    ,{"code":"HIST-UH 1119","level":1000,"name":"HIST-UH 1119 Russia and the World\n","program":["HIST"]}
    ,{"code":"HIST-UH 1120","level":1000,"name":"HIST-UH 1120 Silk Roads Past and Present\n","program":["HIST"]}
    ,{"code":"HIST-UH 1125X","level":1000,"name":"HIST-UH 1125X South Asia in the Indian Ocean World\n","program":["HIST"]}
    ,{"code":"HIST-UH 2010","level":2000,"name":"HIST-UH 2010 History and Globalization\n","program":["HIST"]}
    ,{"code":"HIST-UH 2110","level":2000,"name":"HIST-UH 2110 Global Cold War\n","program":["HIST"]}
    ,{"code":"HIST-UH 2113","level":2000,"name":"HIST-UH 2113 Global Sixties\n","program":["HIST"]}
    ,{"code":"HIST-UH 2115","level":2000,"name":"HIST-UH 2115 World War II in Global Perspective\n","program":["HIST"]}
    ,{"code":"HIST-UH 2116","level":2000,"name":"HIST-UH 2116 Empires and Museums: A History of Knowledge Production and Museum-making\n","program":["HIST"]}
    ,{"code":"HIST-UH 2117","level":2000,"name":"HIST-UH 2117 History in the Headlines\n","program":["HIST"]}
    ,{"code":"HIST-UH 2118","level":2000,"name":"HIST-UH 2118 Global Asia Before Modernity\n","program":["HIST"]}
    ,{"code":"HIST-UH 2119","level":2000,"name":"HIST-UH 2119 Global Asia in the Modern World\n","program":["HIST"]}
    ,{"code":"HIST-UH 2715JX","level":2000,"name":"HIST-UH 2715JX Arab Crossroads: Asia Before and After Genghis Khan\n","program":["HIST"]}
    ,{"code":"HIST-UH 3010","level":3000,"name":"HIST-UH 3010 Writing History\n","program":["HIST"]}
    ,{"code":"HIST-UH 3110","level":3000,"name":"HIST-UH 3110 Economic Development and Environmental Change in China\n","program":["HIST"]}
    ,{"code":"HIST-UH 3112","level":3000,"name":"HIST-UH 3112 Asian Borderlands\n","program":["HIST"]}
    ,{"code":"HIST-UH 3310","level":3000,"name":"HIST-UH 3310 Humanitarianism in Africa: A Critical History\n","program":["HIST"]}
    ,{"code":"HIST-UH 3312","level":3000,"name":"HIST-UH 3312 Arts and Politics in Modern Latin America (1780 to the present)\n","program":["HIST"]}
    ,{"code":"HIST-UH 3315","level":3000,"name":"HIST-UH 3315 Love in Africa\n","program":["HIST"]}
    ,{"code":"HIST-UH 3317J","level":3000,"name":"HIST-UH 3317J A History of Economic Thought from Adam Smith to the Euro-crisis\n","program":["HIST"]}
    ,{"code":"HIST-UH 3318","level":3000,"name":"HIST-UH 3318 US Foreign Policy since 1898\n","program":["HIST"]}
    ,{"code":"HIST-UH 3319","level":3000,"name":"HIST-UH 3319 African American Freedom Struggle\n","program":["HIST"]}
    ,{"code":"HIST-UH 3320","level":3000,"name":"HIST-UH 3320 Port Cities of the Atlantic World\n","program":["HIST"]}
    ,{"code":"HIST-UH 3321J","level":3000,"name":"HIST-UH 3321J Atlantic Moments in the Making of the American Republic\n","program":["HIST"]}
    ,{"code":"HIST-UH 3322JX","level":3000,"name":"HIST-UH 3322JX African Empires: West Africa and Ethiopia\n","program":["HIST"]}
    ,{"code":"HIST-UH 3323J","level":3000,"name":"HIST-UH 3323J Trans-Atlantic Slave Trade: History and Memories\n","program":["HIST"]}
    ,{"code":"HIST-UH 3510X","level":3000,"name":"HIST-UH 3510X Muslim Societies in African History\n","program":["HIST"]}
    ,{"code":"HIST-UH 3511X","level":3000,"name":"HIST-UH 3511X Islam in the Indian Ocean World\n","program":["HIST"]}
    ,{"code":"HIST-UH 3512J","level":3000,"name":"HIST-UH 3512J Science and the Sea\n","program":["HIST"]}
    ,{"code":"HIST-UH 3513X","level":3000,"name":"HIST-UH 3513X Spirituality and Materiality Across the Indian Ocean\n","program":["HIST"]}
    ,{"code":"HIST-UH 3710X","level":3000,"name":"HIST-UH 3710X Central Asia and the Middle East\n","program":["HIST"]}
    ,{"code":"HIST-UH 3712","level":3000,"name":"HIST-UH 3712 Ancient Roman Empire\n","program":["HIST"]}
    ,{"code":"HIST-UH 3714","level":3000,"name":"HIST-UH 3714 Mediterranean: Archives, Translations, Histories\n","program":["HIST"]}
    ,{"code":"HIST-UH 4000","level":4000,"name":"HIST-UH 4000 Capstone Seminar\n","program":["HIST"]}
    ,{"code":"HIST-UH 4001","level":4000,"name":"HIST-UH 4001 Capstone Project\n","program":["HIST"]}
    ,{"code":"IM-UH 1010","level":1000,"name":"IM-UH 1010 Introduction to Interactive Media\n","program":["IM"]}
    ,{"code":"IM-UH 1011","level":1000,"name":"IM-UH 1011 Communications Lab\n","program":["IM"]}
    ,{"code":"IM-UH 1012","level":1000,"name":"IM-UH 1012 Communication and Technology\n","program":["IM"]}
    ,{"code":"IM-UH 1013","level":1000,"name":"IM-UH 1013 Understanding Interactive Media - Critical Questions & Theories\n","program":["IM"]}
    ,{"code":"IM-UH 1110","level":1000,"name":"IM-UH 1110 Circuit Breakers!\n","program":["IM"]}
    ,{"code":"IM-UH 1500J","level":1000,"name":"IM-UH 1500J Immersive Storytelling and the Art of Making the Virtual a Reality\n","program":["IM"]}
    ,{"code":"IM-UH 1511","level":1000,"name":"IM-UH 1511 Introduction to Digital Humanities\n","program":["IM"]}
    ,{"code":"IM-UH 1512J","level":1000,"name":"IM-UH 1512J Super-human\n","program":["IM"]}
    ,{"code":"IM-UH 1513","level":1000,"name":"IM-UH 1513 Temporary Expert: Developing a Research-based Art Practice\n","program":["IM"]}
    ,{"code":"IM-UH 1514J","level":1000,"name":"IM-UH 1514J Resourcefulness: Ethiopia\n","program":["IM"]}
    ,{"code":"IM-UH 2113","level":2000,"name":"IM-UH 2113 Machine Lab\n","program":["IM"]}
    ,{"code":"IM-UH 2117","level":2000,"name":"IM-UH 2117 Performing Robots\n","program":["IM"]}
    ,{"code":"IM-UH 2310","level":2000,"name":"IM-UH 2310 Mashups - Creating with Web APIs\n","program":["IM"]}
    ,{"code":"IM-UH 2315","level":2000,"name":"IM-UH 2315 Software Art: Image\n","program":["IM"]}
    ,{"code":"IM-UH 2316","level":2000,"name":"IM-UH 2316 Software Art: Text\n","program":["IM"]}
    ,{"code":"IM-UH 2318","level":2000,"name":"IM-UH 2318 Decoding Nature\n","program":["IM"]}
    ,{"code":"IM-UH 2320","level":2000,"name":"IM-UH 2320 Games and Play\n","program":["IM"]}
    ,{"code":"IM-UH 2322","level":2000,"name":"IM-UH 2322 Live Coding\n","program":["IM"]}
    ,{"code":"IM-UH 2323","level":2000,"name":"IM-UH 2323 Data: Code It, Make It\n","program":["IM"]}
    ,{"code":"IM-UH 2513","level":2000,"name":"IM-UH 2513 Future Punk\n","program":["IM"]}
    ,{"code":"IM-UH 2514E","level":2000,"name":"IM-UH 2514E Bioart Practices\n","program":["IM"]}
    ,{"code":"IM-UH 2520J","level":2000,"name":"IM-UH 2520J Making Education\n","program":["IM"]}
    ,{"code":"IM-UH 3112","level":3000,"name":"IM-UH 3112 Network Everything\n","program":["IM"]}
    ,{"code":"IM-UH 3114","level":3000,"name":"IM-UH 3114 Sensors, Body, & Motion\n","program":["IM"]}
    ,{"code":"IM-UH 3310","level":3000,"name":"IM-UH 3310 Politics of Code\n","program":["IM"]}
    ,{"code":"IM-UH 3311","level":3000,"name":"IM-UH 3311 Alternate Realities\n","program":["IM"]}
    ,{"code":"IM-UH 3312","level":3000,"name":"IM-UH 3312 A.rt I.ntel\n","program":["IM"]}
    ,{"code":"IM-UH 3313","level":3000,"name":"IM-UH 3313 Robota Psyche\n","program":["IM"]}
    ,{"code":"IM-UH 4000","level":4000,"name":"IM-UH 4000 Capstone Seminar\n","program":["IM"]}
    ,{"code":"IM-UH 4001","level":4000,"name":"IM-UH 4001 Capstone Project\n","program":["IM"]}
    ,{"code":"LAW-UH 1010","level":1000,"name":"LAW-UH 1010 What is Law? Comparative Global Jurisprudence\n","program":["LAW"]}
    ,{"code":"LAW-UH 1011","level":1000,"name":"LAW-UH 1011 Legal Writing and Research\n","program":["LAW"]}
    ,{"code":"LAW-UH 1012","level":1000,"name":"LAW-UH 1012 Legal System and Method\n","program":["LAW"]}
    ,{"code":"LAW-UH 1013","level":1000,"name":"LAW-UH 1013 Business Law\n","program":["LAW"]}
    ,{"code":"LAW-UH 1014","level":1000,"name":"LAW-UH 1014 Commercial Law\n","program":["LAW"]}
    ,{"code":"LAW-UH 1110","level":1000,"name":"LAW-UH 1110 Contracts\n","program":["LAW"]}
    ,{"code":"LAW-UH 1112","level":1000,"name":"LAW-UH 1112 Relationship of Government and Religion\n","program":["LAW"]}
    ,{"code":"LAW-UH 2010","level":2000,"name":"LAW-UH 2010 Legal Institutions\n","program":["LAW"]}
    ,{"code":"LAW-UH 2011","level":2000,"name":"LAW-UH 2011 Constitutional and Administrative Law\n","program":["LAW"]}
    ,{"code":"LAW-UH 2112","level":2000,"name":"LAW-UH 2112 Gender in Law\n","program":["LAW"]}
    ,{"code":"LAW-UH 2114","level":2000,"name":"LAW-UH 2114 Climate Change Law and Policy\n","program":["LAW"]}
    ,{"code":"LAW-UH 2115X","level":2000,"name":"LAW-UH 2115X Comparative Legal Systems: United States and United Arab Emirates\n","program":["LAW"]}
    ,{"code":"LAW-UH 2116","level":2000,"name":"LAW-UH 2116 International Business Law\n","program":["LAW"]}
    ,{"code":"LAW-UH 2117","level":2000,"name":"LAW-UH 2117 International Business\n","program":["LAW"]}
    ,{"code":"LAW-UH 2119","level":2000,"name":"LAW-UH 2119 Speech, Debate, and Oral Argumentation\n","program":["LAW"]}
    ,{"code":"LAW-UH 2120J","level":2000,"name":"LAW-UH 2120J Law in Entrepreneurship\n","program":["LAW"]}
    ,{"code":"LAW-UH 2121","level":2000,"name":"LAW-UH 2121 Renewable Energy Law and Policy\n","program":["LAW"]}
    ,{"code":"LAW-UH 2122X","level":2000,"name":"LAW-UH 2122X Introduction to Islamic Law\n","program":["LAW"]}
    ,{"code":"LAW-UH 2123","level":2000,"name":"LAW-UH 2123 Public International Law\n","program":["LAW"]}
    ,{"code":"LAW-UH 2124","level":2000,"name":"LAW-UH 2124 Human Rights Law\n","program":["LAW"]}
    ,{"code":"LAW-UH 2125X","level":2000,"name":"LAW-UH 2125X Islamic Law and Secular Politics\n","program":["LAW"]}
    ,{"code":"LAW-UH 2126JX","level":2000,"name":"LAW-UH 2126JX International Commercial Arbitration: From Ancient Arabia to Contemporary Singapore\n","program":["LAW"]}
    ,{"code":"LAW-UH 2128","level":2000,"name":"LAW-UH 2128 Theory of Property Law\n","program":["LAW"]}
    ,{"code":"LAW-UH 2129","level":2000,"name":"LAW-UH 2129 Mooting\n","program":["LAW"]}
    ,{"code":"LAW-UH 2130","level":2000,"name":"LAW-UH 2130 Global Sustainable Cities\n","program":["LAW"]}
    ,{"code":"LAW-UH 2131","level":2000,"name":"LAW-UH 2131 Law and the Arts\n","program":["LAW"]}
    ,{"code":"LAW-UH 2132","level":2000,"name":"LAW-UH 2132 Vis Moot Part I: International Arbitration Competition East\n","program":["LAW"]}
    ,{"code":"LAW-UH 2133","level":2000,"name":"LAW-UH 2133 Vis Moot Part II: International Arbitration Competition\n","program":["LAW"]}
    ,{"code":"LAW-UH 2134","level":2000,"name":"LAW-UH 2134 Animal Law & Policy\n","program":["LAW"]}
    ,{"code":"LAW-UH 2500","level":2000,"name":"LAW-UH 2500 Criminal Law\n","program":["LAW"]}
    ,{"code":"LAW-UH 2501","level":2000,"name":"LAW-UH 2501 Torts\n","program":["LAW"]}
    ,{"code":"LAW-UH 3010","level":3000,"name":"LAW-UH 3010 Legal Ethics and Professional Responsibility\n","program":["LAW"]}
    ,{"code":"LAW-UH 3500","level":3000,"name":"LAW-UH 3500 Property - Land Law\n","program":["LAW"]}
    ,{"code":"LAW-UH 3501","level":3000,"name":"LAW-UH 3501 Equity and Trusts\n","program":["LAW"]}
    ,{"code":"LAW-UH 3503","level":3000,"name":"LAW-UH 3503 European Union Law\n","program":["LAW"]}
    ,{"code":"LAW-UH 4000","level":4000,"name":"LAW-UH 4000 Legal Studies Capstone Seminar\n","program":["LAW"]}
    ,{"code":"LAW-UH 4001","level":4000,"name":"LAW-UH 4001 Legal Studies Capstone Project\n","program":["LAW"]}
    ,{"code":"LEAD-UH 2110","level":2000,"name":"LEAD-UH 2110 United States in Conflict: Cases from Politics, Economics, Media, Culture, and Law\n","program":["LEAD"]}
    ,{"code":"LITCW-UH 1000","level":1000,"name":"LITCW-UH 1000 Literary Interpretation\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 1001","level":1000,"name":"LITCW-UH 1001 Foundations of Literature I: Epic and Drama\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 1002","level":1000,"name":"LITCW-UH 1002 Foundations of Literature II: Lyric Poetry and the Novel\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 1003","level":1000,"name":"LITCW-UH 1003 Introduction to Creative Writing\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 1101","level":1000,"name":"LITCW-UH 1101 Rotten Englishes: Postcolonialism and the Politics of Language\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 1103J","level":1000,"name":"LITCW-UH 1103J James Baldwin’s Global Imagination\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 1104J","level":1000,"name":"LITCW-UH 1104J Writing the City\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 1160","level":1000,"name":"LITCW-UH 1160 Global Women Writing\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 1501","level":1000,"name":"LITCW-UH 1501 Feature Writing\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 1502","level":1000,"name":"LITCW-UH 1502 Travel Writing\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 1503","level":1000,"name":"LITCW-UH 1503 Letters From Afar: Travel Writing Abroad\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 1504J","level":1000,"name":"LITCW-UH 1504J Fiction Writing: Craft Workshop\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 1505J","level":1000,"name":"LITCW-UH 1505J Is it Only Personal: The Role of \"The Column\" in Public Discourse\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 1506","level":1000,"name":"LITCW-UH 1506 Today We Wrote Nothing\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 1507J","level":1000,"name":"LITCW-UH 1507J Energy Fiction: Blood, Oil, and Capital\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 1508","level":1000,"name":"LITCW-UH 1508 Shame and Shamelessness: The Craft of Confessional Writing\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 1509","level":1000,"name":"LITCW-UH 1509 The City and the Writer: New York City and Abu Dhabi\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 2101","level":2000,"name":"LITCW-UH 2101 Literary and Cultural Theory\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 2312X","level":2000,"name":"LITCW-UH 2312X Masterpieces of Pre-Modern Arabic Literature in Translation\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 2314J","level":2000,"name":"LITCW-UH 2314J New York Urbanism: Poetry, Art and Architecture Since 1900\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 2315X","level":2000,"name":"LITCW-UH 2315X Postcolonial Turn\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 2320","level":2000,"name":"LITCW-UH 2320 Reading Dramatic Literature: Authority and Imagination\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 2332","level":2000,"name":"LITCW-UH 2332 Literature and Revolution\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 2333","level":2000,"name":"LITCW-UH 2333 Translation and Colonization\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 2340","level":2000,"name":"LITCW-UH 2340 Inventions of Love: East and West\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 2341","level":2000,"name":"LITCW-UH 2341 Asian and Arab Diaspora in the Arts\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 2503","level":2000,"name":"LITCW-UH 2503 Advanced Creative Writing: Nonfiction Essay\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 2504","level":2000,"name":"LITCW-UH 2504 Poetry Workshop: Intermediary Creative Writing\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 2510","level":2000,"name":"LITCW-UH 2510 Intermediate Creative Writing: Narrative Prose - Form and Style\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 3000","level":3000,"name":"LITCW-UH 3000 Problems and Methods of Literary Studies\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 3312","level":3000,"name":"LITCW-UH 3312 Global Text: Moby-Dick\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 3313","level":3000,"name":"LITCW-UH 3313 Global Text: Ulysses\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 3314","level":3000,"name":"LITCW-UH 3314 Global Text: Star Wars\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 3315","level":3000,"name":"LITCW-UH 3315 Early Modern English Drama: Staging the World\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 3317","level":3000,"name":"LITCW-UH 3317 Migrant Poetics, Narratives of Flight\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 3318","level":3000,"name":"LITCW-UH 3318 Arts of Attention: Reading Global Modernisms\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 3350X","level":3000,"name":"LITCW-UH 3350X Literatures of the Middle East and the Maghreb (North Africa)\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 3360","level":3000,"name":"LITCW-UH 3360 Postcolonial Studies\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 3361","level":3000,"name":"LITCW-UH 3361 Freedom and Alienation\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 3501","level":3000,"name":"LITCW-UH 3501 Advanced Creative Writing: Documentary Forms\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 3502","level":3000,"name":"LITCW-UH 3502 Advanced Creative Writing: A Novel in Fourteen Weeks\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 3504","level":3000,"name":"LITCW-UH 3504 Advanced Creative Writing: Workshop in Poetry\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 3505","level":3000,"name":"LITCW-UH 3505 Dramatizing History\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 3507","level":3000,"name":"LITCW-UH 3507 ACW: Workshop in Fiction\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 4000","level":4000,"name":"LITCW-UH 4000 Capstone Seminar\n","program":["LITCW"]}
    ,{"code":"LITCW-UH 4001","level":4000,"name":"LITCW-UH 4001 Capstone Project\n","program":["LITCW"]}
    ,{"code":"MATH-UH 1000A","level":1000,"name":"MATH-UH 1000A Mathematics for Statistics and Calculus Part I\n","program":["MATH"]}
    ,{"code":"MATH-UH 1000B","level":1000,"name":"MATH-UH 1000B Mathematics for Statistics and Calculus Part II\n","program":["MATH"]}
    ,{"code":"MATH-UH 1002","level":1000,"name":"MATH-UH 1002 Introduction to Vector Mathematics\n","program":["MATH"]}
    ,{"code":"MATH-UH 1005","level":1000,"name":"MATH-UH 1005 Trigonometry and Differential Calculus\n","program":["MATH"]}
    ,{"code":"MATH-UH 1009JQ","level":1000,"name":"MATH-UH 1009JQ Integral Calculus\n","program":["MATH"]}
    ,{"code":"MATH-UH 1010","level":1000,"name":"MATH-UH 1010 Foundations of Mathematics\n","program":["MATH"]}
    ,{"code":"MATH-UH 1012Q","level":1000,"name":"MATH-UH 1012Q Calculus with Applications to Science and Engineering\n","program":["MATH"]}
    ,{"code":"MATH-UH 1013Q","level":1000,"name":"MATH-UH 1013Q Calculus with Applications to Economics\n","program":["MATH"]}
    ,{"code":"MATH-UH 1020","level":1000,"name":"MATH-UH 1020 Multivariable Calculus with Applications to Science and Engineering\n","program":["MATH"]}
    ,{"code":"MATH-UH 1021","level":1000,"name":"MATH-UH 1021 Multivariable Calculus with Applications to Economics\n","program":["MATH"]}
    ,{"code":"MATH-UH 1022","level":1000,"name":"MATH-UH 1022 Linear Algebra\n","program":["MATH"]}
    ,{"code":"MATH-UH 1023","level":1000,"name":"MATH-UH 1023 Fundamentals of Linear Algebra\n","program":["MATH"]}
    ,{"code":"MATH-UH 1024","level":1000,"name":"MATH-UH 1024 Fundamentals of Ordinary Differential Equations\n","program":["MATH"]}
    ,{"code":"MATH-UH 2010","level":2000,"name":"MATH-UH 2010 Ordinary Differential Equations\n","program":["MATH"]}
    ,{"code":"MATH-UH 2011Q","level":2000,"name":"MATH-UH 2011Q Probability and Statistics\n","program":["MATH"]}
    ,{"code":"MATH-UH 2012","level":2000,"name":"MATH-UH 2012 Abstract Algebra 1\n","program":["MATH"]}
    ,{"code":"MATH-UH 2013","level":2000,"name":"MATH-UH 2013 Analysis 1\n","program":["MATH"]}
    ,{"code":"MATH-UH 2410","level":2000,"name":"MATH-UH 2410 Mathematical Modeling\n","program":["MATH"]}
    ,{"code":"MATH-UH 3090","level":3000,"name":"MATH-UH 3090 Research Seminar in Mathematics\n","program":["MATH"]}
    ,{"code":"MATH-UH 3210","level":3000,"name":"MATH-UH 3210 Abstract Algebra 2\n","program":["MATH"]}
    ,{"code":"MATH-UH 3212","level":3000,"name":"MATH-UH 3212 Analysis 2\n","program":["MATH"]}
    ,{"code":"MATH-UH 3213","level":3000,"name":"MATH-UH 3213 Advanced Probability\n","program":["MATH"]}
    ,{"code":"MATH-UH 3410","level":3000,"name":"MATH-UH 3410 Number Theory and Cryptography\n","program":["MATH"]}
    ,{"code":"MATH-UH 3411","level":3000,"name":"MATH-UH 3411 Dynamical Systems\n","program":["MATH"]}
    ,{"code":"MATH-UH 3413","level":3000,"name":"MATH-UH 3413 Numerical Methods\n","program":["MATH"]}
    ,{"code":"MATH-UH 3414","level":3000,"name":"MATH-UH 3414 Partial Differential Equations\n","program":["MATH"]}
    ,{"code":"MATH-UH 3610","level":3000,"name":"MATH-UH 3610 Complex Analysis\n","program":["MATH"]}
    ,{"code":"MATH-UH 3612","level":3000,"name":"MATH-UH 3612 Differential Geometry\n","program":["MATH"]}
    ,{"code":"MATH-UH 4001","level":4000,"name":"MATH-UH 4001 Capstone Project in Mathematics 1\n","program":["MATH"]}
    ,{"code":"MATH-UH 4002","level":4000,"name":"MATH-UH 4002 Capstone Project in Mathematics 2\n","program":["MATH"]}
    ,{"code":"MATH-UH 4610","level":4000,"name":"MATH-UH 4610 Topology\n","program":["MATH"]}
    ,{"code":"MATH-UH 4660","level":4000,"name":"MATH-UH 4660 Special Topics in Mathematics\n","program":["MATH"]}
    ,{"code":"MCC-UH 1003J","level":1000,"name":"MCC-UH 1003J Media and Climate Change, Conflict, Calamities (and Covid)\n","program":["MCC"]}
    ,{"code":"MCC-UH 1005","level":1000,"name":"MCC-UH 1005 Media: Objects, History, Theory\n","program":["MCC"]}
    ,{"code":"MCC-UH 1006J","level":1000,"name":"MCC-UH 1006J Reporting Morocco\n","program":["MCC"]}
    ,{"code":"MCC-UH 1009J","level":1000,"name":"MCC-UH 1009J Reporting Sydney\n","program":["MCC"]}
    ,{"code":"MCC-UH 1011J","level":1000,"name":"MCC-UH 1011J Memory and Visual Culture\n","program":["MCC"]}
    ,{"code":"MCC-UH 1012J","level":1000,"name":"MCC-UH 1012J Mining the Archive in the UAE\n","program":["MCC"]}
    ,{"code":"MCC-UH 1013J","level":1000,"name":"MCC-UH 1013J Reclaiming the Narrative: Today’s African Writers Unleash their Africa Upon the World:\n","program":["MCC"]}
    ,{"code":"MUSIC-UH 1001","level":1000,"name":"MUSIC-UH 1001 Music Theory & Analysis I\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1002","level":1000,"name":"MUSIC-UH 1002 Music Technology Fundamentals\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1003","level":1000,"name":"MUSIC-UH 1003 Making Music\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1004","level":1000,"name":"MUSIC-UH 1004 Music: Histories and Historiography 1\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1005","level":1000,"name":"MUSIC-UH 1005 Anthropology of Music 1\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1202","level":1000,"name":"MUSIC-UH 1202 Beginning Group Music Instruction - Clarinet\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1203","level":1000,"name":"MUSIC-UH 1203 Beginning Group Music Instruction - Flute\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1204","level":1000,"name":"MUSIC-UH 1204 Beginning Group Music Instruction - Oud\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1205","level":1000,"name":"MUSIC-UH 1205 Beginning Group Music Instruction - Piano\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1206","level":1000,"name":"MUSIC-UH 1206 Beginning Group Music Instruction - Saxophone\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1207","level":1000,"name":"MUSIC-UH 1207 Beginning Group Music Instruction - Trumpet\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1209","level":1000,"name":"MUSIC-UH 1209 Beginner Group Music - Immersive Audio\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1210","level":1000,"name":"MUSIC-UH 1210 Beginning Group Music Instruction - Violin\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1211","level":1000,"name":"MUSIC-UH 1211 Beginning Group Music Instruction - Guitar\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1220","level":1000,"name":"MUSIC-UH 1220 Music Ensembles\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1251","level":1000,"name":"MUSIC-UH 1251 Individual Music Instruction 1\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1252","level":1000,"name":"MUSIC-UH 1252 Individual Music Instruction 2\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1271","level":1000,"name":"MUSIC-UH 1271 John Cage and New Perspectives on Performance\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1410","level":1000,"name":"MUSIC-UH 1410 Introduction to Musical Programming 1 - An introduction to Max\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1420","level":1000,"name":"MUSIC-UH 1420 Intro to Musical Programming 2 - Generative Music and Max for Live\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1611X","level":1000,"name":"MUSIC-UH 1611X Arab Music Cultures\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1615JX","level":1000,"name":"MUSIC-UH 1615JX Engaging Khaleeji Musical Heritage: An Introduction to Applied Ethnomusicology\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1617X","level":1000,"name":"MUSIC-UH 1617X Popular Music in the Arab World\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1618X","level":1000,"name":"MUSIC-UH 1618X Music and Identity in Trade\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1619JX","level":1000,"name":"MUSIC-UH 1619JX Arab Jewish Musical Legacies\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1620J","level":1000,"name":"MUSIC-UH 1620J African Music and the Global Order of Time\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1662","level":1000,"name":"MUSIC-UH 1662 African Popular Music\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1713","level":1000,"name":"MUSIC-UH 1713 Musical Theater Since 1850: A Mirror of Society\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1761","level":1000,"name":"MUSIC-UH 1761 Opera: Mortal Encounters-Immortal Songs\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 1801","level":1000,"name":"MUSIC-UH 1801 Music and Outer Space\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 2004","level":2000,"name":"MUSIC-UH 2004 Music Histories and Historiography 2\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 2005","level":2000,"name":"MUSIC-UH 2005 Anthropology of Music 2\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 2201","level":2000,"name":"MUSIC-UH 2201 Continuing Group Music Instruction\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 2210","level":2000,"name":"MUSIC-UH 2210 Art of Song\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 2215","level":2000,"name":"MUSIC-UH 2215 Designing Sound for Scene and Screen\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 2251","level":2000,"name":"MUSIC-UH 2251 Individual Music Instruction 3\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 2252","level":2000,"name":"MUSIC-UH 2252 Individual Music Instruction 4\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 2411","level":2000,"name":"MUSIC-UH 2411 Musical Acoustics\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 2413","level":2000,"name":"MUSIC-UH 2413 Fundamentals of Digital Audio - Introduction to Pro Tools\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 2416","level":2000,"name":"MUSIC-UH 2416 Recording and Production Techniques\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 2417","level":2000,"name":"MUSIC-UH 2417 Advanced Musical Programming\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 2418","level":2000,"name":"MUSIC-UH 2418 Immersive Audio Storytelling for Motion Picture\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 2419","level":2000,"name":"MUSIC-UH 2419 Computational Approaches to Music and Audio I\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 2662","level":2000,"name":"MUSIC-UH 2662 Music and Copyright\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 2665","level":2000,"name":"MUSIC-UH 2665 Global Jazz\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 2801","level":2000,"name":"MUSIC-UH 2801 Music Theory & Analysis II\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 3251","level":3000,"name":"MUSIC-UH 3251 Individual Music Instruction 5\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 3252","level":3000,"name":"MUSIC-UH 3252 Individual Music Instruction 6\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 3411","level":3000,"name":"MUSIC-UH 3411 Mixing & Mastering Techniques\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 3416","level":3000,"name":"MUSIC-UH 3416 Mastering\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 3860","level":3000,"name":"MUSIC-UH 3860 Advanced Topics in Music Theory\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 4000","level":4000,"name":"MUSIC-UH 4000 Capstone Seminar\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 4001","level":4000,"name":"MUSIC-UH 4001 Music Practice Capstone Project\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 4010","level":4000,"name":"MUSIC-UH 4010 Music Studies Capstone Seminar\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 4011","level":4000,"name":"MUSIC-UH 4011 Music Studies Capstone Project\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 4251","level":4000,"name":"MUSIC-UH 4251 Individual Music Instruction 7\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 4252","level":4000,"name":"MUSIC-UH 4252 Individual Music Instruction 8\n","program":["MUSIC"]}
    ,{"code":"MUSIC-UH 4253","level":4000,"name":"MUSIC-UH 4253 Individual Music Instruction 9\n","program":["MUSIC"]}
    ,{"code":"MUSST-UH 1101J","level":1000,"name":"MUSST-UH 1101J Shaping of Identity: Past and Future of Egyptological Collections\n","program":["MUSST"]}
    ,{"code":"PEACE-UH 1010","level":1000,"name":"PEACE-UH 1010 Foundations of Peace: Psychological Perspectives\n","program":["PEACE"]}
    ,{"code":"PEACE-UH 1011","level":1000,"name":"PEACE-UH 1011 Foundations of Peace: Economic and Political Perspectives\n","program":["PEACE"]}
    ,{"code":"PEACE-UH 1110","level":1000,"name":"PEACE-UH 1110 Transitional Justice\n","program":["PEACE"]}
    ,{"code":"PEACE-UH 1113","level":1000,"name":"PEACE-UH 1113 Peacebuilding\n","program":["PEACE"]}
    ,{"code":"PEACE-UH 1115J","level":1000,"name":"PEACE-UH 1115J Arts for Transformation: The Case of Cambodia\n","program":["PEACE"]}
    ,{"code":"PEACE-UH 1116JX","level":1000,"name":"PEACE-UH 1116JX Convivencia: A Model for Living Together\n","program":["PEACE"]}
    ,{"code":"PEACE-UH 1117J","level":1000,"name":"PEACE-UH 1117J Nation-Building in the Shadow of Empire\n","program":["PEACE"]}
    ,{"code":"PEACE-UH 1118J","level":1000,"name":"PEACE-UH 1118J Arts for Transformation\n","program":["PEACE"]}
    ,{"code":"PHIL-UH 1101","level":1000,"name":"PHIL-UH 1101 Central Problems in Philosophy\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 1110","level":1000,"name":"PHIL-UH 1110 The Meaning of Life\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 1115","level":1000,"name":"PHIL-UH 1115 Fear of Knowledge\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 1117","level":1000,"name":"PHIL-UH 1117 Law and Philosophy\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 1118","level":1000,"name":"PHIL-UH 1118 Bioethics\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 1810","level":1000,"name":"PHIL-UH 1810 Introduction to Logic\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 1910","level":1000,"name":"PHIL-UH 1910 Philosophy of Quantum Mechanics\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2210","level":2000,"name":"PHIL-UH 2210 Ancient Mediterranean Philosophy\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2211X","level":2000,"name":"PHIL-UH 2211X Classical Arabic Philosophy\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2212","level":2000,"name":"PHIL-UH 2212 Classical Indian Philosophy\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2222","level":2,"name":"PHIL-UH 2222 Early Modern European Philosophy\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2223","level":2000,"name":"PHIL-UH 2223 Nineteenth- and Twentieth-Century European Philosophy\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2224","level":2000,"name":"PHIL-UH 2224 Classical Chinese Philosophy\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2410","level":2000,"name":"PHIL-UH 2410 Epistemology\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2411","level":2000,"name":"PHIL-UH 2411 Metaphysics\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2412","level":2000,"name":"PHIL-UH 2412 Philosophy of Language\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2413","level":2000,"name":"PHIL-UH 2413 Philosophy of Mind\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2414","level":2000,"name":"PHIL-UH 2414 Philosophy of Science\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2415","level":2000,"name":"PHIL-UH 2415 Philosophy of Mathematics\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2416","level":2000,"name":"PHIL-UH 2416 Images\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2417","level":2000,"name":"PHIL-UH 2417 Philosophical Foundations of Space, Time and Motion\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2610","level":2000,"name":"PHIL-UH 2610 Ethics\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2611","level":2000,"name":"PHIL-UH 2611 Applied Ethics\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2614","level":2000,"name":"PHIL-UH 2614 Political Philosophy\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 2810","level":2000,"name":"PHIL-UH 2810 Advanced Logic\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 3210","level":3000,"name":"PHIL-UH 3210 Topics in the History of Philosophy\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 3410","level":3000,"name":"PHIL-UH 3410 Topics in Theoretical Philosophy\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 3610","level":3000,"name":"PHIL-UH 3610 Topics in Practical Philosophy\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 4000","level":4000,"name":"PHIL-UH 4000 Capstone Project\n","program":["PHIL"]}
    ,{"code":"PHIL-UH 4001","level":4000,"name":"PHIL-UH 4001 Capstone Project\n","program":["PHIL"]}
    ,{"code":"PHYED-UH 1000","level":1000,"name":"PHYED-UH 1000 Flexible Fitness\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1001","level":1000,"name":"PHYED-UH 1001 Beginner Fitness for Life\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1002","level":1000,"name":"PHYED-UH 1002 Beginner Swimming\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1003","level":1000,"name":"PHYED-UH 1003 Intermediate Swimming\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1006","level":1000,"name":"PHYED-UH 1006 Beginner Hip Hop\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1008","level":1000,"name":"PHYED-UH 1008 Scuba - Open Water\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1009","level":1000,"name":"PHYED-UH 1009 Fencing\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1011","level":1000,"name":"PHYED-UH 1011 Jiu Jitsu\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1012","level":1000,"name":"PHYED-UH 1012 WO Yogalates\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1013","level":1000,"name":"PHYED-UH 1013 Beginner Golf\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1014","level":1000,"name":"PHYED-UH 1014 Beginner Tennis\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1015","level":1000,"name":"PHYED-UH 1015 Triathlon\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1016","level":1000,"name":"PHYED-UH 1016 WO Swimming\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1017","level":1000,"name":"PHYED-UH 1017 Squash\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1018","level":1000,"name":"PHYED-UH 1018 Performance Boxing\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1019","level":1000,"name":"PHYED-UH 1019 Beginner Resistance Training\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1020","level":1000,"name":"PHYED-UH 1020 Total Fitness (Advanced)\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1021","level":1000,"name":"PHYED-UH 1021 WO Performance Boxing\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1022","level":1000,"name":"PHYED-UH 1022 Yoga\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1023","level":1000,"name":"PHYED-UH 1023 Badminton\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1024","level":1000,"name":"PHYED-UH 1024 Running 101\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1025","level":1000,"name":"PHYED-UH 1025 Aikido\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1026","level":1000,"name":"PHYED-UH 1026 Speed and Agility\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1027","level":1000,"name":"PHYED-UH 1027 Beginner Rock Climbing\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1028","level":1000,"name":"PHYED-UH 1028 Indoor Cycling\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1030","level":1000,"name":"PHYED-UH 1030 WO Yoga\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1031","level":1000,"name":"PHYED-UH 1031 Introduction to Sports Medicine\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1035","level":1000,"name":"PHYED-UH 1035 Sports Officiating\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1037","level":1000,"name":"PHYED-UH 1037 Open Water Sports\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1038","level":1000,"name":"PHYED-UH 1038 Distance Running and Road Racing\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1039","level":1000,"name":"PHYED-UH 1039 Intermediate Golf\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1040","level":1000,"name":"PHYED-UH 1040 WO Fitness\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1041","level":1000,"name":"PHYED-UH 1041 WO Hip Hop\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1042","level":1000,"name":"PHYED-UH 1042 Beginner Ballet\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1043","level":1000,"name":"PHYED-UH 1043 Outdoor Team Sports and Recreational Activities\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1044","level":1000,"name":"PHYED-UH 1044 Volleyball\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1046","level":1000,"name":"PHYED-UH 1046 Modern Dance (Intro to Horton Technique)\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1048","level":1000,"name":"PHYED-UH 1048 Beginner Karate\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1049","level":1000,"name":"PHYED-UH 1049 WO Indoor Cycling\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1052","level":1000,"name":"PHYED-UH 1052 Beginner World Dance\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1053","level":1000,"name":"PHYED-UH 1053 Beginner Partner Dance\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1054","level":1000,"name":"PHYED-UH 1054 Beginner Pop Choreography\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1056","level":1000,"name":"PHYED-UH 1056 Outdoor Games\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1057","level":1000,"name":"PHYED-UH 1057 WO Pilates\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1058","level":1000,"name":"PHYED-UH 1058 WO Fitness (Level 2)\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1059","level":1000,"name":"PHYED-UH 1059 Jedi Training\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1060","level":1000,"name":"PHYED-UH 1060 Cycling the UAE\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1061","level":1000,"name":"PHYED-UH 1061 Lindy Hop Swing Dance\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1062","level":1000,"name":"PHYED-UH 1062 Olympic Weightlifting\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1063","level":1000,"name":"PHYED-UH 1063 Flag Football\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1064","level":1000,"name":"PHYED-UH 1064 WO Olympic Weight Lifting\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1065","level":1000,"name":"PHYED-UH 1065 WO Jiu Jitsu\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1066","level":1000,"name":"PHYED-UH 1066 WO Beginner Rock Climbing\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1067","level":1000,"name":"PHYED-UH 1067 Latin Rhythms\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1068","level":1000,"name":"PHYED-UH 1068 SNAP (Special Needs Adaptive Programs)\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1069","level":1000,"name":"PHYED-UH 1069 Futsal\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1070","level":1000,"name":"PHYED-UH 1070 Holistic Happiness\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1071","level":1000,"name":"PHYED-UH 1071 Functional Training\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1072","level":1000,"name":"PHYED-UH 1072 Strength Training\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1073","level":1000,"name":"PHYED-UH 1073 Healthy Habits\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1076","level":1000,"name":"PHYED-UH 1076 WO Zumba\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1081","level":1000,"name":"PHYED-UH 1081 Build Your Best Self\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1082","level":1000,"name":"PHYED-UH 1082 Nutrition 101\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1083","level":1000,"name":"PHYED-UH 1083 WO Running\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1084","level":1000,"name":"PHYED-UH 1084 High Intensity Training\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1085","level":1000,"name":"PHYED-UH 1085 WO Holistic Happiness\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1086","level":1000,"name":"PHYED-UH 1086 WO High Intensity Training\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1087","level":1000,"name":"PHYED-UH 1087 Beginner Soccer\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1088","level":1000,"name":"PHYED-UH 1088 WO Beginner Tennis\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 1089","level":1000,"name":"PHYED-UH 1089 Zumba\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 2001","level":2000,"name":"PHYED-UH 2001 Intercollegiate Badminton\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 2003","level":2000,"name":"PHYED-UH 2003 Intercollegiate Basketball\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 2004","level":2000,"name":"PHYED-UH 2004 Intercollegiate Basketball\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 2005","level":2000,"name":"PHYED-UH 2005 Intercollegiate Cricket\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 2007","level":2000,"name":"PHYED-UH 2007 Intercollegiate Soccer\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 2008","level":2000,"name":"PHYED-UH 2008 Intercollegiate Soccer\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 2009","level":2000,"name":"PHYED-UH 2009 Intercollegiate Table Tennis\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 2010","level":2000,"name":"PHYED-UH 2010 Intercollegiate Table Tennis\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 2011","level":2000,"name":"PHYED-UH 2011 Intercollegiate Volleyball\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 2012","level":2000,"name":"PHYED-UH 2012 Intercollegiate Volleyball\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 2013","level":2000,"name":"PHYED-UH 2013 Intercollegiate Swimming\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 3001","level":3000,"name":"PHYED-UH 3001 Intercollegiate Badminton II\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 3003","level":3000,"name":"PHYED-UH 3003 Intercollegiate Basketball II\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 3004","level":3000,"name":"PHYED-UH 3004 Intercollegiate Basketball II\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 3005","level":3000,"name":"PHYED-UH 3005 Intercollegiate Cricket II\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 3007","level":3000,"name":"PHYED-UH 3007 Intercollegiate Soccer II\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 3008","level":3000,"name":"PHYED-UH 3008 Intercollegiate Soccer II\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 3009","level":3000,"name":"PHYED-UH 3009 Intercollegiate Table Tennis II\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 3011","level":3000,"name":"PHYED-UH 3011 Intercollegiate Volleyball II\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 3012","level":3000,"name":"PHYED-UH 3012 Intercollegiate Volleyball II\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 3013","level":3000,"name":"PHYED-UH 3013 Intercollegiate Swimming II\n","program":["PHYED"]}
    ,{"code":"PHYED-UH 3014","level":3000,"name":"PHYED-UH 3014 Intercollegiate Track & Field\n","program":["PHYED"]}
    ,{"code":"PHYS-UH 2010","level":2000,"name":"PHYS-UH 2010 Electromagnetism and Special Relativity\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 2115","level":2000,"name":"PHYS-UH 2115 Electricity and Magnetism for Engineers\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 3010","level":3000,"name":"PHYS-UH 3010 Mechanics\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 3011","level":3000,"name":"PHYS-UH 3011 Electricity and Magnetism\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 3012","level":3000,"name":"PHYS-UH 3012 Quantum Mechanics 1\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 3013","level":3000,"name":"PHYS-UH 3013 Advanced Physics Laboratory\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 3014","level":3000,"name":"PHYS-UH 3014 Statistical Mechanics and Thermodynamics\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 3090","level":3000,"name":"PHYS-UH 3090 Research Seminar in Physics\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 3211","level":3000,"name":"PHYS-UH 3211 General Relativity\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 3213","level":3000,"name":"PHYS-UH 3213 Computational Physics\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 3214","level":3000,"name":"PHYS-UH 3214 Astrophysics\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 3215","level":3000,"name":"PHYS-UH 3215 Introduction to Detector Electronics\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 3217","level":3000,"name":"PHYS-UH 3217 Multi-wavelength Astronomy\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 3219","level":3000,"name":"PHYS-UH 3219 Biological Physics: From single molecules to the cell\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 3220","level":3000,"name":"PHYS-UH 3220 Imaging and Spectroscopy Lab\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 3221","level":3000,"name":"PHYS-UH 3221 Radio Imaging and Time Series Lab\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 3222","level":3000,"name":"PHYS-UH 3222 X Ray Astronomy Lab\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 4001","level":4000,"name":"PHYS-UH 4001 Capstone Project in Physics 1\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 4002","level":4000,"name":"PHYS-UH 4002 Capstone Project in Physics 2\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 4212","level":4000,"name":"PHYS-UH 4212 Quantum Mechanics 2\n","program":["PHYS"]}
    ,{"code":"PHYS-UH 4216","level":4000,"name":"PHYS-UH 4216 Nuclear Astrophysics\n","program":["PHYS"]}
    ,{"code":"POLSC-UH 1111","level":1,"name":"POLSC-UH 1111 Introduction to Comparative Politics\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 1112","level":1000,"name":"POLSC-UH 1112 Introduction to International Politics\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 1113J","level":1000,"name":"POLSC-UH 1113J Confronting the 21st Century\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2211","level":2000,"name":"POLSC-UH 2211 Data Analysis\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2310","level":2000,"name":"POLSC-UH 2310 Political Psychology\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2311","level":2000,"name":"POLSC-UH 2311 Political Economy of Institutions\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2312","level":2000,"name":"POLSC-UH 2312 Political Economy of Development\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2313J","level":2000,"name":"POLSC-UH 2313J Introduction to Machiavelli\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2316","level":2000,"name":"POLSC-UH 2316 Gender Parity\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2317","level":2000,"name":"POLSC-UH 2317 Identity and Culture in Politics\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2318","level":2000,"name":"POLSC-UH 2318 Indian Political Thought: Ideas of India\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2320J","level":2000,"name":"POLSC-UH 2320J Diversity and Society\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2321","level":2000,"name":"POLSC-UH 2321 Women and Peace-building\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2322J","level":2000,"name":"POLSC-UH 2322J Civil Liberties: Legal and Moral Perspectives\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2323J","level":2000,"name":"POLSC-UH 2323J Suffering and Politics\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2324J","level":2000,"name":"POLSC-UH 2324J Politics of Belonging: Membership, Communities, Nations, and Boundaries\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2325J","level":2000,"name":"POLSC-UH 2325J Revolution\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2326","level":2000,"name":"POLSC-UH 2326 Politics and Finance\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2327","level":2000,"name":"POLSC-UH 2327 Political Parties\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2410X","level":2000,"name":"POLSC-UH 2410X Comparative Politics of the Middle East\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2411","level":2000,"name":"POLSC-UH 2411 Politics, Social Change & Development in South Asia\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2412","level":2000,"name":"POLSC-UH 2412 Power and Politics in America\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2414","level":2000,"name":"POLSC-UH 2414 African Politics\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2415","level":2000,"name":"POLSC-UH 2415 Democracy and Development in Eastern Europe and Russia\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2416","level":2000,"name":"POLSC-UH 2416 Health and Governance\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2417J","level":2000,"name":"POLSC-UH 2417J Post-communist Democracy and Authoritarianism\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2418J","level":2000,"name":"POLSC-UH 2418J Nationalism and Identity Politics\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2419J","level":2000,"name":"POLSC-UH 2419J Nationalism and Identity Politics\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2420J","level":2000,"name":"POLSC-UH 2420J From Abraham the Patriarch to Abraham Accords: Who Are You Israel?\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2421X","level":2000,"name":"POLSC-UH 2421X Political Economy of the Middle East\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2422X","level":2000,"name":"POLSC-UH 2422X North African Politics\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2423","level":2000,"name":"POLSC-UH 2423 Media and Politics\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2511","level":2000,"name":"POLSC-UH 2511 International Organizations\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2512J","level":2000,"name":"POLSC-UH 2512J Understanding Insurgency and Counterinsurgency\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2513J","level":2000,"name":"POLSC-UH 2513J Political Conflict and Economic Development\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2514","level":2000,"name":"POLSC-UH 2514 Political Economy of International Trade\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2515JX","level":2000,"name":"POLSC-UH 2515JX Islamic Extremism\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2516","level":2000,"name":"POLSC-UH 2516 United Nations\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2517JQ","level":2000,"name":"POLSC-UH 2517JQ Modeling Politics and International Relations\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2519","level":2000,"name":"POLSC-UH 2519 Nuclear Politics\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2522J","level":2000,"name":"POLSC-UH 2522J Global Crisis in the European Context\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2525J","level":2000,"name":"POLSC-UH 2525J Power Relations Theory\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2527","level":2000,"name":"POLSC-UH 2527 Politics of International Law\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2528","level":2000,"name":"POLSC-UH 2528 International Diplomacy in Theory and Practice\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2529J","level":2000,"name":"POLSC-UH 2529J Moving Towards Net Zero While Delivering the Sustainable Development Goals\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2910","level":2000,"name":"POLSC-UH 2910 Business, Politics, and Society\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2911","level":2000,"name":"POLSC-UH 2911 Environmental Politics\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2912","level":2000,"name":"POLSC-UH 2912 Politics of Natural Resources\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 2913J","level":2000,"name":"POLSC-UH 2913J Electing the President: An Up-close Look at How American Elections Really Work\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 3312J","level":3000,"name":"POLSC-UH 3312J Social Media and Political Participation\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 3313","level":3000,"name":"POLSC-UH 3313 Making and Breaking Elections\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 3411J","level":3000,"name":"POLSC-UH 3411J Gender Revolutions and the State in India\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 3413","level":3000,"name":"POLSC-UH 3413 Foreign Policy Analysis\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 3510","level":3000,"name":"POLSC-UH 3510 International Political Economy\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 3512","level":3000,"name":"POLSC-UH 3512 Civil Wars and International Intervention\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 3516J","level":3000,"name":"POLSC-UH 3516J Surviving the 21st Century: Power and Statecraft in the Digital Age\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 4000","level":4000,"name":"POLSC-UH 4000 Capstone Seminar\n","program":["POLSC"]}
    ,{"code":"POLSC-UH 4001","level":4000,"name":"POLSC-UH 4001 Capstone Project\n","program":["POLSC"]}
    ,{"code":"PSYCH-UH 1001","level":1000,"name":"PSYCH-UH 1001 Introduction to Psychology\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 1002EQ","level":1000,"name":"PSYCH-UH 1002EQ Research Methods in Psychology\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 1003","level":1000,"name":"PSYCH-UH 1003 Biopsychology\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 1004Q","level":1000,"name":"PSYCH-UH 1004Q Statistics for Psychology\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 2210","level":2000,"name":"PSYCH-UH 2210 Developmental Psychology\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 2211","level":2000,"name":"PSYCH-UH 2211 Social Psychology\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 2212","level":2000,"name":"PSYCH-UH 2212 Psychology of Language\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 2213","level":2000,"name":"PSYCH-UH 2213 Motivation and Volition\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 2215","level":2000,"name":"PSYCH-UH 2215 Psychology of Sex and Gender\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 2216","level":2000,"name":"PSYCH-UH 2216 Psychotherapy and Counselling\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 2217","level":2000,"name":"PSYCH-UH 2217 Abnormal Psychology\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 2218","level":2000,"name":"PSYCH-UH 2218 Language Science\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 2410","level":2000,"name":"PSYCH-UH 2410 Cognition\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 2411","level":2000,"name":"PSYCH-UH 2411 Perception\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 2412","level":2000,"name":"PSYCH-UH 2412 Cognitive Neuroscience\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 3090","level":3000,"name":"PSYCH-UH 3090 Research Seminar in Psychology\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 3510","level":3000,"name":"PSYCH-UH 3510 Prejudice and Stereotyping\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 3511","level":3000,"name":"PSYCH-UH 3511 Visual Cognition\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 3512","level":3000,"name":"PSYCH-UH 3512 Applied Perspectives on Human Memory\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 3513","level":3000,"name":"PSYCH-UH 3513 Psychology of Terrorism\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 3612EQ","level":3000,"name":"PSYCH-UH 3612EQ Lab in Psychology of Inequality\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 3613EQ","level":3000,"name":"PSYCH-UH 3613EQ Lab in Early Childhood Education\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 3614EQ","level":3000,"name":"PSYCH-UH 3614EQ Lab in Multisensory Perception and Action\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 3615EQ","level":3000,"name":"PSYCH-UH 3615EQ Laboratory in Psychology of Language\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 3616","level":3000,"name":"PSYCH-UH 3616 Data Analysis for the Psychological Sciences\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 3617EQ","level":3000,"name":"PSYCH-UH 3617EQ Lab in Visual Neuroscience\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 3618EQ","level":3000,"name":"PSYCH-UH 3618EQ Lab in Psychology of Gender Images\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 4001","level":4000,"name":"PSYCH-UH 4001 Capstone Project in Psychology 1\n","program":["PSYCH"]}
    ,{"code":"PSYCH-UH 4002","level":4000,"name":"PSYCH-UH 4002 Capstone Project in Psychology 2\n","program":["PSYCH"]}
    ,{"code":"PSYCN-UH 1000","level":1000,"name":"PSYCN-UH 1000 Introduction to Linguistics\n","program":["PSYCN"]}
    ,{"code":"PSYCN-UH 1001J","level":1000,"name":"PSYCN-UH 1001J Cognition\n","program":["PSYCN"]}
    ,{"code":"PSYCN-UH 1002","level":1000,"name":"PSYCN-UH 1002 Gender & Representation: Field Study Workshop\n","program":["PSYCN"]}
    ,{"code":"PSYCN-UH 1003","level":1000,"name":"PSYCN-UH 1003 Psychology of Human Sexuality\n","program":["PSYCN"]}
    ,{"code":"PSYCN-UH 1004","level":1000,"name":"PSYCN-UH 1004 Transformative Interviewing\n","program":["PSYCN"]}
    ,{"code":"SCIEN-UH 1101:1103","level":1000,"name":"SCIEN-UH 1101:1103 Foundations of Science 1: Energy & Matter\n","program":["SCIEN"]}
    ,{"code":"SCIEN-UH 1201:1203","level":1000,"name":"SCIEN-UH 1201:1203 Foundations of Science 2: Forces & Interactions\n","program":["SCIEN"]}
    ,{"code":"SCIEN-UH 1301:1304","level":1000,"name":"SCIEN-UH 1301:1304 Foundations of Science 3: Systems in Flux\n","program":["SCIEN"]}
    ,{"code":"SCIEN-UH 1401:1404","level":1000,"name":"SCIEN-UH 1401:1404 Foundations of Science 4: Form and Function\n","program":["SCIEN"]}
    ,{"code":"SCIEN-UH 1501:1503","level":1000,"name":"SCIEN-UH 1501:1503 Foundations of Science 5: Propagating Change\n","program":["SCIEN"]}
    ,{"code":"SCIEN-UH 1601:1603","level":1000,"name":"SCIEN-UH 1601:1603 Foundations of Science 6: Oscillations and Uncertainties\n","program":["SCIEN"]}
    ,{"code":"SOCSC-UH 1010Q","level":1000,"name":"SOCSC-UH 1010Q Statistics for the Social and Behavioral Sciences\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 1011","level":1000,"name":"SOCSC-UH 1011 Global Economic, Political and Social Development since 1500 (GEPS)\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 1101","level":1000,"name":"SOCSC-UH 1101 Mathematics for Social Scientists I\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 1111","level":1,"name":"SOCSC-UH 1111 Markets\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 1112","level":1000,"name":"SOCSC-UH 1112 Introduction to Political Thinking\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 1113","level":1000,"name":"SOCSC-UH 1113 Introduction to the Study of Society\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 1201","level":1000,"name":"SOCSC-UH 1201 Mathematics for Social Scientists II\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 1210Q","level":1000,"name":"SOCSC-UH 1210Q Logic of Social Inquiry\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 1310","level":1000,"name":"SOCSC-UH 1310 Foundations of Modern Social Thought\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 1311","level":1000,"name":"SOCSC-UH 1311 Introduction to Political Theory\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 1312","level":1000,"name":"SOCSC-UH 1312 Modern Social Theory in Comparative Perspective\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 2210","level":2000,"name":"SOCSC-UH 2210 Introduction to Game Theory\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 2211","level":2000,"name":"SOCSC-UH 2211 Survey Research\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 2212","level":2000,"name":"SOCSC-UH 2212 Research Design & Causality in Social Science\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 2213","level":2000,"name":"SOCSC-UH 2213 Textual Analysis for the Social Sciences\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 2214","level":2000,"name":"SOCSC-UH 2214 Applied Data Science\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 3210","level":3000,"name":"SOCSC-UH 3210 Advanced Game Theory\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 3220","level":3000,"name":"SOCSC-UH 3220 Econometrics\n","program":["SOCSC"]}
    ,{"code":"SOCSC-UH 3221EJ","level":3000,"name":"SOCSC-UH 3221EJ Experimental Research in the Social Sciences\n","program":["SOCSC"]}
    ,{"code":"SPANL-UH 1101","level":1000,"name":"SPANL-UH 1101 Beginning Spanish 1\n","program":["SPANL"]}
    ,{"code":"SRPP-UH 1411J","level":1000,"name":"SRPP-UH 1411J Race and Ethnicity in Comparative Perspective\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1412J","level":1000,"name":"SRPP-UH 1412J Wealth and Inequality in the Global City\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1413X","level":1000,"name":"SRPP-UH 1413X Social Change and Development in the Arab World\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1414","level":1000,"name":"SRPP-UH 1414 Social Dimensions of Health\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1415J","level":1000,"name":"SRPP-UH 1415J Birds in Fragile Ecosystems: The Himalayas, the Middle East, and Hawai'i\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1416J","level":1000,"name":"SRPP-UH 1416J Globally Sustainable Leadership Models\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1419J","level":1000,"name":"SRPP-UH 1419J Refuge Beyond Reach\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1610J","level":1000,"name":"SRPP-UH 1610J Child Development and Social Policy in a Global Society\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1612","level":1000,"name":"SRPP-UH 1612 Global Health and Economic Development\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1616J","level":1000,"name":"SRPP-UH 1616J Children, Youth and Sustainable Development of the World's Cities\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1617","level":1000,"name":"SRPP-UH 1617 Sociology of Entrepreneurship\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1618J","level":1000,"name":"SRPP-UH 1618J Political Abdications\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1619J","level":1000,"name":"SRPP-UH 1619J Philanthropy Today: How Organized Money Fuels Innovation, Institutions and Movements\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1620J","level":1000,"name":"SRPP-UH 1620J Himalayas: Geopolitics and Ecology of Melting Mountains Water Towers, Sky Rivers and the Sponge\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1701","level":1000,"name":"SRPP-UH 1701 International Migration\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1810X","level":1000,"name":"SRPP-UH 1810X Islam and Society\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1811","level":1000,"name":"SRPP-UH 1811 Discipline\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1812J","level":1000,"name":"SRPP-UH 1812J Sociology of Morality: Good, Evil, Altruism, and Norms\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1813X","level":1000,"name":"SRPP-UH 1813X Family and Gender in the Arab World: Continuity and Change\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1814J","level":1000,"name":"SRPP-UH 1814J Language, Religion and Ethnicity\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1815J","level":1000,"name":"SRPP-UH 1815J Diversity, Inclusion and Tolerance?: Contemplations on 21st Century Identity Formation\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1816","level":1000,"name":"SRPP-UH 1816 Crime and Deviance\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1817J","level":1000,"name":"SRPP-UH 1817J Birthing Inequity\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 1818","level":1000,"name":"SRPP-UH 1818 Gender, Policy and Politics\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2211","level":2000,"name":"SRPP-UH 2211 Ethnographic Field Research\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2213J","level":2000,"name":"SRPP-UH 2213J Sports & Society\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2214","level":2000,"name":"SRPP-UH 2214 Interview Methods\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2410","level":2000,"name":"SRPP-UH 2410 Gender and Society\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2411","level":2000,"name":"SRPP-UH 2411 Wealth and Inequality\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2412X","level":2000,"name":"SRPP-UH 2412X Islamist Social Movements in the Middle East\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2413J","level":2000,"name":"SRPP-UH 2413J Connecting Neighborhoods and Health: An Introduction to Spatial Epidemiology\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2414","level":2000,"name":"SRPP-UH 2414 Family Change and Social Inequality\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2416X","level":2000,"name":"SRPP-UH 2416X Gulf Urban Societies\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2417","level":2000,"name":"SRPP-UH 2417 Global Stratification\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2418","level":2000,"name":"SRPP-UH 2418 Politics and Society\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2610","level":2000,"name":"SRPP-UH 2610 Introduction to Public Policy\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2611","level":2000,"name":"SRPP-UH 2611 Social Policy\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2612X","level":2000,"name":"SRPP-UH 2612X State Formation: The Case of the United Arab Emirates\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2614X","level":2000,"name":"SRPP-UH 2614X Women and Work in the Gulf\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2616","level":2000,"name":"SRPP-UH 2616 Immigration, Ethnicity and Public Policy\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2618","level":2000,"name":"SRPP-UH 2618 Welfare States in Comparative Perspective\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2619","level":2000,"name":"SRPP-UH 2619 Leadership and Diplomacy\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2620","level":2000,"name":"SRPP-UH 2620 Education and Society\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2621","level":2000,"name":"SRPP-UH 2621 Bound by Borders: Sociology of Law and Migration\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2622J","level":2000,"name":"SRPP-UH 2622J Seminar in Sociogenomics\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2623J","level":2000,"name":"SRPP-UH 2623J Cultures of Addiction: A Bio-Social View\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2624JX","level":2000,"name":"SRPP-UH 2624JX Disability in a Global Context: Advancing Inclusion in the UAE\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2625JX","level":2000,"name":"SRPP-UH 2625JX Making Women Matter: Case Studies from the GCC\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2626J","level":2000,"name":"SRPP-UH 2626J Knowledge Translation: Bridging Science, Policy, and Practice in Inclusive Education\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2627","level":2000,"name":"SRPP-UH 2627 Organizations and Society\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2628J","level":2000,"name":"SRPP-UH 2628J Lead With a Story\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 2801X","level":2000,"name":"SRPP-UH 2801X Community- Engaged Scholarship: Addressing Social Hierarchies in the UAE\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 3210","level":3000,"name":"SRPP-UH 3210 Practicum in Social Research\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 3214","level":3000,"name":"SRPP-UH 3214 Social Networks\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 3215","level":3000,"name":"SRPP-UH 3215 Quantitative Data Analysis\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 3410","level":3000,"name":"SRPP-UH 3410 Social Science Analysis of Global News\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 3412","level":3000,"name":"SRPP-UH 3412 Issues in African Societies\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 3610","level":3000,"name":"SRPP-UH 3610 Public Policy Analysis: Case studies for Effective Formation and Implementation\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 3810","level":3000,"name":"SRPP-UH 3810 Topics in Contemporary Theory\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 4000","level":4000,"name":"SRPP-UH 4000 Capstone Seminar\n","program":["SRPP"]}
    ,{"code":"SRPP-UH 4001","level":4000,"name":"SRPP-UH 4001 Capstone Project\n","program":["SRPP"]}
    ,{"code":"THEAT-UH 1010","level":1000,"name":"THEAT-UH 1010 Making Theater\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1011","level":1000,"name":"THEAT-UH 1011 Thinking Theater\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1012","level":1000,"name":"THEAT-UH 1012 Skills and Safety\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1110","level":1000,"name":"THEAT-UH 1110 Fundamentals of Acting\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1111","level":1,"name":"THEAT-UH 1111 Creating Original Work\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1112","level":1000,"name":"THEAT-UH 1112 Fundamentals of Playwriting\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1114J","level":1000,"name":"THEAT-UH 1114J \"Under the Radar\" at The Public Theater\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1121","level":1000,"name":"THEAT-UH 1121 Design for Performance\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1122","level":1000,"name":"THEAT-UH 1122 Voice, Speech, and Text\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1123","level":1000,"name":"THEAT-UH 1123 Unmasking the Actor\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1124","level":1000,"name":"THEAT-UH 1124 Soundpainting\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1125J","level":1000,"name":"THEAT-UH 1125J Dramaturgy of Disruption\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1126","level":1000,"name":"THEAT-UH 1126 Costuming Performance\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1127","level":1000,"name":"THEAT-UH 1127 Ugly\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1510X","level":1000,"name":"THEAT-UH 1510X Theater in the Arab World\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1512","level":1000,"name":"THEAT-UH 1512 Representing the Real\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1513","level":1000,"name":"THEAT-UH 1513 Making the Anthropo[s]cene: Figuring Climate Change Across the Arts\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1514","level":1000,"name":"THEAT-UH 1514 African Women Playwrights\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1515","level":1000,"name":"THEAT-UH 1515 History of Community Based Performances\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1516J","level":1000,"name":"THEAT-UH 1516J Experimental/Avantgarde Performance: Paris Now, New York 1960s-70s\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1517X","level":1000,"name":"THEAT-UH 1517X Arab Performance and Revolution\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1518","level":1000,"name":"THEAT-UH 1518 Spectacle and Surveillance\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 1519","level":1000,"name":"THEAT-UH 1519 Installation Art\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 2110","level":2000,"name":"THEAT-UH 2110 Character and Action\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 2115","level":2000,"name":"THEAT-UH 2115 Directing\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 2511","level":2000,"name":"THEAT-UH 2511 Art, Performance, and Social Practice\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 3090","level":3000,"name":"THEAT-UH 3090 Capstone Seminar\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 3110","level":3000,"name":"THEAT-UH 3110 Director’s Lab\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 4001","level":4000,"name":"THEAT-UH 4001 Capstone Project A\n","program":["THEAT"]}
    ,{"code":"THEAT-UH 4002","level":4000,"name":"THEAT-UH 4002 Capstone Project B\n","program":["THEAT"]}
    ,{"code":"UNIST-GH 5120","level":5000,"name":"UNIST-GH 5120 Microeconomics 2 Evaluation\n","program":["UNIST"]}
    ,{"code":"UNIST-GH 5220","level":5000,"name":"UNIST-GH 5220 Empirical Economics Evaluation\n","program":["UNIST"]}
    ,{"code":"UNIST-GH 5410","level":5000,"name":"UNIST-GH 5410 Economics of International Development Evaluation\n","program":["UNIST"]}
    ,{"code":"URBAN-UH 1110J","level":1000,"name":"URBAN-UH 1110J Planning Abu Dhabi\n","program":["URBAN"]}
    ,{"code":"URBAN-UH 1122J","level":1000,"name":"URBAN-UH 1122J Contested Cities: Difference, Inequality, and the Metropolis\n","program":["URBAN"]}
    ,{"code":"URBAN-UH 1123J","level":1000,"name":"URBAN-UH 1123J Transnational City: Abu Dhabi, Dubai, and Beyond\n","program":["URBAN"]}
    ,{"code":"URBAN-UH 1124J","level":1000,"name":"URBAN-UH 1124J Sustainable Urban Transportation Planning for the 21st Century\n","program":["URBAN"]}
    ,{"code":"VISAR-UH 1010","level":1000,"name":"VISAR-UH 1010 Foundations of Photography\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 1011","level":1000,"name":"VISAR-UH 1011 Foundations of 2D\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 1012","level":1000,"name":"VISAR-UH 1012 Foundations of 3D\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 1013","level":1000,"name":"VISAR-UH 1013 Foundations of 4D\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 1110","level":1000,"name":"VISAR-UH 1110 Types of Art: From Calligraphy and Stone Carving to Digital Type\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 1112","level":1000,"name":"VISAR-UH 1112 Foundations of Graphic Design\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 1114","level":1000,"name":"VISAR-UH 1114 Yes Logo\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 1115X","level":1000,"name":"VISAR-UH 1115X Arabic Typography\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 1116J","level":1000,"name":"VISAR-UH 1116J Inside Out - When Art Reflects the Self\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 2110","level":2000,"name":"VISAR-UH 2110 Projects in Photography\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 2111","level":2000,"name":"VISAR-UH 2111 Projects in Painting\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 2112","level":2000,"name":"VISAR-UH 2112 Interventions: Three-Dimensional Thinking\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 2113","level":2000,"name":"VISAR-UH 2113 Projects in Sculpture\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 2115","level":2000,"name":"VISAR-UH 2115 Fiber Studio: Textile Practices and Projects in the Arts\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 2116","level":2000,"name":"VISAR-UH 2116 Print Studio 1\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 2117","level":2000,"name":"VISAR-UH 2117 Sound Art\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 2119","level":2000,"name":"VISAR-UH 2119 Surface Design: Pattern making and meaning\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 2120","level":2000,"name":"VISAR-UH 2120 Documentary Photography\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 2121","level":2000,"name":"VISAR-UH 2121 Art and Architecture: Reinventing the City\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 2122","level":2000,"name":"VISAR-UH 2122 Projects in Mixed Media\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 2124","level":2000,"name":"VISAR-UH 2124 Projects in Drawing\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 2125","level":2000,"name":"VISAR-UH 2125 Advanced Lighting and Production Techniques\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 3111","level":3000,"name":"VISAR-UH 3111 Projects in Painting\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 3112","level":3000,"name":"VISAR-UH 3112 Advanced Projects in 2D\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 4000","level":4000,"name":"VISAR-UH 4000 Visual Arts Capstone Seminar\n","program":["VISAR"]}
    ,{"code":"VISAR-UH 4001","level":4000,"name":"VISAR-UH 4001 Visual Arts Capstone Project\n","program":["VISAR"]}
    ,{"code":"WRIT-UH 1002J","level":1000,"name":"WRIT-UH 1002J Global Discoveries and Dialogues: The Quill and the Chisel\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1003J","level":1000,"name":"WRIT-UH 1003J Global Discoveries and Dialogues: Histories of and in Greece\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1004J","level":1000,"name":"WRIT-UH 1004J Global Discoveries: From Athena to Athens, Myth - Past and Present\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1010","level":1000,"name":"WRIT-UH 1010 AEP/ESP Methods of the Written Voice: Research Methods and Writing Process\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1100","level":1000,"name":"WRIT-UH 1100 FYWS: Taste, Culture & the Self\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1101","level":1000,"name":"WRIT-UH 1101 FYWS: Imagined Geographies\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1102X","level":1000,"name":"WRIT-UH 1102X FYWS: Contemporary Debates of Islam\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1103","level":1000,"name":"WRIT-UH 1103 FYWS: Ghastly Beauty\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1104X","level":1000,"name":"WRIT-UH 1104X FYWS: Understanding Shari’a\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1105","level":1000,"name":"WRIT-UH 1105 FYWS: The Outsider\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1106","level":1000,"name":"WRIT-UH 1106 FYWS: Records\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1107","level":1000,"name":"WRIT-UH 1107 FYWS: Street Food\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1108","level":1000,"name":"WRIT-UH 1108 FYWS: Writers on Writing\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1109","level":1000,"name":"WRIT-UH 1109 FYWS: Questions of Fatherhood\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1110","level":1000,"name":"WRIT-UH 1110 FYWS: Power and Ethics in Photography\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1111","level":1,"name":"WRIT-UH 1111 FYWS: “Cowboys & Indians”: Mythologies of American Identity\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1112","level":1000,"name":"WRIT-UH 1112 FYWS: Time\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1113","level":1000,"name":"WRIT-UH 1113 FYWS: Saving Strangers: Debates about Humanitarian Intervention\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1114","level":1000,"name":"WRIT-UH 1114 FYWS: Contextualizing Travel Narratives\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1115","level":1000,"name":"WRIT-UH 1115 FYWS: The Art and Aesthetics of International Aid\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1116","level":1000,"name":"WRIT-UH 1116 FYWS: The Politics of Spectacle\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1117","level":1000,"name":"WRIT-UH 1117 FYWS: We Broke the Weather\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1118","level":1000,"name":"WRIT-UH 1118 FYWS: Citizens of Nowhere\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1119","level":1000,"name":"WRIT-UH 1119 FYWS: Living Cities\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1120","level":1000,"name":"WRIT-UH 1120 FYWS: Inventions of Childhood\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1121","level":1000,"name":"WRIT-UH 1121 FYWS: Making Sense of Scents\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1122","level":1000,"name":"WRIT-UH 1122 FYWS: Worlds Connected, Worlds Apart\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1123","level":1000,"name":"WRIT-UH 1123 FYWS: Scientific Knowledge\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1124","level":1000,"name":"WRIT-UH 1124 FYWS: Slavery After Slavery\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1125","level":1000,"name":"WRIT-UH 1125 FYWS: Graphic Violence\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1126X","level":1000,"name":"WRIT-UH 1126X FYWS: Understanding Postcolonial Feminisms\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1127","level":1000,"name":"WRIT-UH 1127 FYWS: Real and Imagined: Women’s Writing Across Worlds\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1128","level":1000,"name":"WRIT-UH 1128 FYWS: Memory, History, and Forgetting\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1129","level":1000,"name":"WRIT-UH 1129 FYWS: The World of Babel: Translation Before the Modern Age\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1130","level":1000,"name":"WRIT-UH 1130 FYWS: Speaking of Sickness\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1131","level":1000,"name":"WRIT-UH 1131 FYWS: Writing About the Languages We Speak\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1132","level":1000,"name":"WRIT-UH 1132 FYWS: Protest Art\n","program":["WRIT"]}
    ,{"code":"WRIT-UH 1134","level":1000,"name":"WRIT-UH 1134 FYWS: The Last Straw: The Effects of Environmental Change Throughout Time\n","program":["WRIT"]}
];

module.exports = {
    data: data
}