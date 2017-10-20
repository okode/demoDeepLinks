import { DeepLinkConfig } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';

export const AppDeepLinkConfig: DeepLinkConfig = {
    links: [
        { component: HomePage, name: 'Home', segment: 'home' },
        { component: ContactPage, name: 'Contact', segment: 'contact' },
        { component: AboutPage, name: 'About', segment: 'about' }
    ]
};