import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';


const firebaseConfig = {
    REACT_APP_API_KEY: "AIzaSyCncnG0mwJBizBX9kh_b5lA46HcFN8G6zE",
    REACT_APP_AUTH_DOMAIN: "tibianovojogocom.firebaseapp.com",
    REACT_APP_DATABASE_URL: "https://tibianovojogocom-default-rtdb.firebaseio.com",
    REACT_APP_PROJECT_ID: "tibianovojogocom",
    REACT_APP_STORAGE_BUCKET: "tibianovojogocom.appspot.com",
    REACT_APP_MESSASING_SENDER_ID: "445088028725",
    REACT_APP_APP_ID: "1:445088028725:web:53df06b9bff8107cb3397c",
    REACT_APP_MEASUREMENT_ID: "G-TQLSMQQBC7"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();
