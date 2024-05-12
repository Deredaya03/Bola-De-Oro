import SpainFlag from '@/components/flags/Es.astro';

// Add missing imports
export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof SpainFlag }
> = {
	es: {
		code: 'es',
		name: 'Español',
		flag: SpainFlag,
	}
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
	es: {
		'nav.inicio': 'Inicio',
		'nav.Cafeterías': 'Cafeterías',
		'nav.Nosotros': 'Nosotros',
		'nav.Tienda': 'Tienda',
		'nav.Menu': 'Menu',
		'nav.legal': 'Aviso Legal',
		'nav.privacidad': 'Privacidad',
		'nav.cookies': 'Cookies',
	}
} as const;

export const routes = {
	es: {
		Cafeterías: 'Cafeterías',
		info: 'info',
		archivo: 'archivo',
		'aviso-legal': 'aviso-legal',
		privacidad: 'privacidad',
		cookies: 'cookies',
	}
};