export interface Animal {
	/** @required */
	slug: string;
	status?: 'adopted' | 'draft' | 'Reservado' | 'published';
	sort?: number | null;
	user_created?: DirectusUser | string | null;
	date_created?: string | null;
	user_updated?: DirectusUser | string | null;
	date_updated?: string | null;
	/** @description Nombre de la mascota @required */
	name: string;
	birth_date?: string | null;
	/** @required */
	gender: 'male' | 'female';
	breeds?: string[] | null;
	/** @description Una imagen clara de la carita del animal */
	profile_picture?: DirectusFile | string | null;
	cover?: DirectusFile | string | null;
	size?: '2xl' | 'xl' | 'l' | 'm' | 's' | 'xs' | null;
}

export interface AnimalsFile {
	/** @required */
	id: number;
	animals_slug?: Animal | string | null;
	directus_files_id?: DirectusFile | string | null;
}

export interface AnimalsTranslation {
	/** @required */
	id: number;
	animals_slug?: Animal | string | null;
	languages_code?: Language | string | null;
	description?: string | null;
}

export interface Dog {
	/** @required */
	id: number;
	/** @description Situación del perro en el proceso de adopción */
	status?: 'adopted' | 'draft' | 'reserved' | 'published' | null;
	sort?: number | null;
	user_created?: DirectusUser | string | null;
	date_created?: string | null;
	user_updated?: DirectusUser | string | null;
	date_updated?: string | null;
	/** @required */
	name: string;
	profile_picture?: DirectusFile | string | null;
	/** @required */
	gender: 'male' | 'female';
	breeds?: string[] | null;
	slug?: string | null;
	birth_date?: string | null;
}

export interface DogsFile {
	/** @required */
	id: number;
	dogs_id?: Dog | string | null;
	directus_files_id?: DirectusFile | string | null;
}

export interface DogsTranslation {
	/** @required */
	id: number;
	dogs_id?: Dog | string | null;
	languages_code?: Language | string | null;
	description?: string | null;
}

export interface Global {
	/** @required */
	id: number;
	address?: string | null;
	email?: string | null;
}

export interface GlobalTranslation {
	/** @required */
	id: number;
	global_id?: Global | string | null;
	languages_code?: Language | string | null;
	global_message?: string | null;
}

export interface Language {
	/** @required */
	code: string;
	name?: string | null;
	/** @description Dirección de lectura en el idioma seleccionado  */
	direction?: 'ltr' | 'rtl' | null;
}

export interface Metadatos {
	/** @required */
	id: number;
	user_updated?: DirectusUser | string | null;
	date_updated?: string | null;
	address?: string | null;
	email?: string | null;
	/** @description Mensaje para mostrar en la parte superior de la web */
	global_message?: string | null;
}

export interface Page {
	/** @required */
	id: number;
	status?: 'published' | 'draft' | 'archived';
	sort?: number | null;
	user_created?: DirectusUser | string | null;
	date_created?: string | null;
	user_updated?: DirectusUser | string | null;
	date_updated?: string | null;
	icon?: string | null;
	cover?: DirectusFile | string | null;
	positions?: PagesPosition[] | string[];
}

export interface PagesPosition {
	/** @required */
	id: number;
	pages_id?: Page | string | null;
	positions_slug?: Position | string | null;
}

export interface PagesTranslation {
	/** @required */
	id: number;
	pages_id?: Page | string | null;
	languages_code?: Language | string | null;
	title?: string | null;
	slug?: string | null;
	content?: any | null;
	subtitle?: string | null;
	description?: string | null;
	cta?: string | null;
	/** @description El nombre del enlace a esta página */
	link?: string | null;
}

export interface Position {
	/** @required */
	slug: string;
	description?: string | null;
}

export interface Testimonial {
	/** @required */
	id: number;
	user_updated?: DirectusUser | string | null;
	date_updated?: string | null;
	/** @description Nombre de la persona que escribió el testimonio */
	name?: string | null;
	profile_picture?: DirectusFile | string | null;
}

export interface TestimonialsTranslation {
	/** @required */
	id: number;
	testimonials_id?: Testimonial | string | null;
	languages_code?: Language | string | null;
	message?: string | null;
}

export interface DirectusActivity {
	/** @required */
	id: number;
	action?: string;
	user?: DirectusUser | string | null;
	timestamp?: string;
	ip?: string | null;
	user_agent?: string | null;
	collection?: string;
	item?: string;
	comment?: string | null;
	origin?: string | null;
	revisions?: string;
}

export interface DirectusCollection {
	/** @required */
	collection: string;
	icon?: string | null;
	note?: string | null;
	display_template?: string | null;
	hidden?: boolean;
	singleton?: boolean;
	translations?: Array<{ language: string; translation: string; singular: string; plural: string }> | null;
	archive_field?: string | null;
	archive_app_filter?: boolean;
	archive_value?: string | null;
	unarchive_value?: string | null;
	sort_field?: string | null;
	accountability?: 'all' | 'activity' | null | null;
	color?: string | null;
	item_duplication_fields?: any | null;
	sort?: number | null;
	group?: DirectusCollection | string | null;
	collapse?: string;
	preview_url?: string | null;
	versioning?: boolean;
}

export interface DirectusField {
	/** @required */
	id: number;
	collection?: DirectusCollection | string;
	field?: string;
	special?: string[] | null;
	interface?: string | null;
	options?: any | null;
	display?: string | null;
	display_options?: any | null;
	readonly?: boolean;
	hidden?: boolean;
	sort?: number | null;
	width?: string | null;
	translations?: any | null;
	note?: string | null;
	conditions?: any | null;
	required?: boolean | null;
	group?: DirectusField | string | null;
	validation?: any | null;
	validation_message?: string | null;
}

export interface DirectusFile {
	/** @required */
	id: string;
	storage?: string;
	filename_disk?: string | null;
	filename_download?: string;
	title?: string | null;
	type?: string | null;
	folder?: DirectusFolder | string | null;
	uploaded_by?: DirectusUser | string | null;
	created_on?: string;
	modified_by?: DirectusUser | string | null;
	modified_on?: string;
	charset?: string | null;
	filesize?: number | null;
	width?: number | null;
	height?: number | null;
	duration?: number | null;
	embed?: string | null;
	description?: string | null;
	location?: string | null;
	tags?: string[] | null;
	metadata?: any | null;
	focal_point_x?: number | null;
	focal_point_y?: number | null;
	tus_id?: string | null;
	tus_data?: any | null;
	uploaded_on?: string | null;
}

export interface DirectusFolder {
	/** @required */
	id: string;
	name?: string;
	parent?: DirectusFolder | string | null;
}

export interface DirectusPreset {
	/** @required */
	id: number;
	bookmark?: string | null;
	user?: DirectusUser | string | null;
	role?: DirectusRole | string | null;
	collection?: string | null;
	search?: string | null;
	layout?: string | null;
	layout_query?: any | null;
	layout_options?: any | null;
	refresh_interval?: number | null;
	filter?: any | null;
	icon?: string | null;
	color?: string | null;
}

export interface DirectusRelation {
	/** @required */
	id: number;
	many_collection?: string;
	many_field?: string;
	one_collection?: string | null;
	one_field?: string | null;
	one_collection_field?: string | null;
	one_allowed_collections?: string[] | null;
	junction_field?: string | null;
	sort_field?: string | null;
	one_deselect_action?: string;
}

export interface DirectusRole {
	/** @required */
	id: string;
	/** @required */
	name: string;
	icon?: string;
	description?: string | null;
	parent?: DirectusRole | string | null;
	children?: DirectusRole[] | string[];
	policies?: string;
	users?: DirectusUser[] | string[];
}

export interface DirectusSettings {
	/** @required */
	id: number;
	project_name?: string;
	project_url?: string | null;
	project_color?: string;
	project_logo?: DirectusFile | string | null;
	public_foreground?: DirectusFile | string | null;
	public_background?: DirectusFile | string | null;
	public_note?: string | null;
	auth_login_attempts?: number | null;
	auth_password_policy?: null | `/^.{8,}$/` | `/(?=^.{8,}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{\';\'?>.<,])(?!.*\\s).*$/` | null;
	storage_asset_transform?: 'all' | 'none' | 'presets' | null;
	storage_asset_presets?: Array<{ key: string; fit: 'contain' | 'cover' | 'inside' | 'outside'; width: number; height: number; quality: number; withoutEnlargement: boolean; format: 'auto' | 'jpeg' | 'png' | 'webp' | 'tiff' | 'avif'; transforms: any }> | null;
	custom_css?: string | null;
	storage_default_folder?: DirectusFolder | string | null;
	basemaps?: Array<{ name: string; type: 'raster' | 'tile' | 'style'; url: string; tileSize: number; attribution: string }> | null;
	mapbox_key?: string | null;
	module_bar?: any | null;
	project_descriptor?: string | null;
	default_language?: string;
	custom_aspect_ratios?: Array<{ text: string; value: number }> | null;
	public_favicon?: DirectusFile | string | null;
	default_appearance?: 'auto' | 'light' | 'dark';
	default_theme_light?: string | null;
	theme_light_overrides?: any | null;
	default_theme_dark?: string | null;
	theme_dark_overrides?: any | null;
	report_error_url?: string | null;
	report_bug_url?: string | null;
	report_feature_url?: string | null;
	public_registration?: boolean;
	public_registration_verify_email?: boolean;
	public_registration_role?: DirectusRole | string | null;
	public_registration_email_filter?: any | null;
}

export interface DirectusUser {
	/** @required */
	id: string;
	first_name?: string | null;
	last_name?: string | null;
	email?: string | null;
	password?: string | null;
	location?: string | null;
	title?: string | null;
	description?: string | null;
	tags?: string[] | null;
	avatar?: DirectusFile | string | null;
	language?: string | null;
	tfa_secret?: string | null;
	status?: 'draft' | 'invited' | 'unverified' | 'active' | 'suspended' | 'archived';
	role?: DirectusRole | string | null;
	token?: string | null;
	last_access?: string | null;
	last_page?: string | null;
	provider?: string;
	external_identifier?: string | null;
	auth_data?: any | null;
	email_notifications?: boolean | null;
	appearance?: null | 'auto' | 'light' | 'dark' | null;
	theme_dark?: string | null;
	theme_light?: string | null;
	theme_light_overrides?: any | null;
	theme_dark_overrides?: any | null;
	policies?: string;
}

export interface DirectusDashboard {
	/** @required */
	id: string;
	name?: string;
	icon?: string;
	note?: string | null;
	date_created?: string | null;
	user_created?: DirectusUser | string | null;
	color?: string | null;
	panels?: DirectusPanel[] | string[];
}

export interface DirectusPanel {
	/** @required */
	id: string;
	dashboard?: DirectusDashboard | string;
	name?: string | null;
	icon?: string | null;
	color?: string | null;
	show_header?: boolean;
	note?: string | null;
	type?: string;
	position_x?: number;
	position_y?: number;
	width?: number;
	height?: number;
	options?: any | null;
	date_created?: string | null;
	user_created?: DirectusUser | string | null;
}

export interface DirectusNotification {
	/** @required */
	id: number;
	timestamp?: string | null;
	status?: string | null;
	recipient?: DirectusUser | string;
	sender?: DirectusUser | string | null;
	subject?: string;
	message?: string | null;
	collection?: string | null;
	item?: string | null;
}

export interface DirectusShare {
	/** @required */
	id: string;
	name?: string | null;
	collection?: DirectusCollection | string;
	item?: string;
	role?: DirectusRole | string | null;
	password?: string | null;
	user_created?: DirectusUser | string | null;
	date_created?: string | null;
	date_start?: string | null;
	date_end?: string | null;
	times_used?: number | null;
	max_uses?: number | null;
}

export interface DirectusFlow {
	/** @required */
	id: string;
	name?: string;
	icon?: string | null;
	color?: string | null;
	status?: string;
	trigger?: string | null;
	options?: any | null;
}

export interface DirectusTranslation {
	/** @required */
	id: string;
	/** @required */
	language: string;
	/** @required */
	key: string;
	/** @required */
	value: string;
}

export interface Schema {
	animals: Animal[];
	animals_files: AnimalsFile[];
	animals_translations: AnimalsTranslation[];
	dogs: Dog[];
	dogs_files: DogsFile[];
	dogs_translations: DogsTranslation[];
	global: Global;
	global_translations: GlobalTranslation[];
	languages: Language[];
	Metadatos: Metadatos;
	pages: Page[];
	pages_positions: PagesPosition[];
	pages_translations: PagesTranslation[];
	positions: Position[];
	testimonials: Testimonial[];
	testimonials_translations: TestimonialsTranslation[];
	directus_activity: DirectusActivity[];
	directus_collections: DirectusCollection[];
	directus_fields: DirectusField[];
	directus_files: DirectusFile[];
	directus_folders: DirectusFolder[];
	directus_presets: DirectusPreset[];
	directus_relations: DirectusRelation[];
	directus_roles: DirectusRole[];
	directus_settings: DirectusSettings;
	directus_users: DirectusUser[];
	directus_dashboards: DirectusDashboard[];
	directus_panels: DirectusPanel[];
	directus_notifications: DirectusNotification[];
	directus_shares: DirectusShare[];
	directus_flows: DirectusFlow[];
	directus_translations: DirectusTranslation[];
}
