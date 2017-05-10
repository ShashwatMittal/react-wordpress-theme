<?php

require_once 'class-tgm-plugin-activation.php';

/**
 * Enqueues the required scripts for the theme.
 */
function enqueue_scripts() {
	wp_register_script( 'jquery', 'https://code.jquery.com/jquery-1.12.4.js', array(), NULL, true );
	wp_register_script( 'react_theme', trailingslashit( get_template_directory_uri() ) . 'assets/js/index.js', ['jquery'], NULL, true );
	wp_register_style( 'bootstrap_css', trailingslashit( get_template_directory_uri() ) . 'assets/css/bootstrap.min.css', NULL );
	$translation_array = array(
		'constants' => array(
			'SITE_TITLE'		 => get_bloginfo( 'name' ),
			'SITE_DESCRIPTION'	 => get_bloginfo( 'description' ),
			'SITE_URL'			 => get_bloginfo( 'url' ),
			'WP_VERSION'		 => get_bloginfo( 'version' ),
			'API'				 => '/wp-json/wp/v2/',
			'MENU_API'			 => '/wp-json/wp-api-menus/v2/',
			'POSTS_PER_PAGE'	 => get_option( 'posts_per_page' ),
			'FRONT_PAGE'		 => get_option( 'page_on_front' )
		)
	);
	wp_localize_script( 'react_theme', 'phpData', $translation_array );
	wp_enqueue_script( 'react_theme' );
	wp_enqueue_style( 'react_theme_css', trailingslashit( get_template_directory_uri() ) . 'style.css', ['bootstrap_css' ] );
}

add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );

/**
* Sets the permalink structure required by the theme. This can not be changed by the user otherwise the theme might break.
*/
function set_permalink(){
    global $wp_rewrite;
    $wp_rewrite->set_permalink_structure('/%year%/%monthnum%/%day%/%postname%/');
}
add_action('init', 'set_permalink');

/**
 * Registering Navigation Menu and Sidebar for the theme.
 */
function blackhawk_setup() {
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'blackhawk' ),
	) );

	register_sidebar( array(
		'name'			 => __( 'Sidebar', 'blackhawk' ),
		'id'			 => 'sidebar-1',
		'description'	 => __( 'Sidebar to Display all the Widgets', 'blackhawk' ),
		'before_widget'	 => '<section id="%1$s" class="widget %2$s clearfix">',
		'after_widget'	 => '</section>'
	) );
}

add_action( 'after_setup_theme', 'blackhawk_setup' );

/**
 * Prompts for downloading and installing the required plugins on which the theme depends upon.
 */
function blackhawk_register_required_plugins() {
	$plugins = array(
		array(
			'name'		 => 'WP Rest API Sidebars',
			'slug'		 => 'wp-rest-api-sidebars',
			'required'	 => true,
		),
		array(
			'name'		 => 'WP API Menus',
			'slug'		 => 'wp-api-menus',
			'required'	 => true,
		),
	);

	$config = array(
		'id'			 => 'blackhawk', // Unique ID for hashing notices for multiple instances of TGMPA.
		'default_path'	 => '', // Default absolute path to bundled plugins.
		'menu'			 => 'tgmpa-install-plugins', // Menu slug.
		'parent_slug'	 => 'themes.php', // Parent menu slug.
		'capability'	 => 'edit_theme_options', // Capability needed to view plugin install page, should be a capability associated with the parent menu used.
		'has_notices'	 => true, // Show admin notices or not.
		'dismissable'	 => true, // If false, a user cannot dismiss the nag message.
		'dismiss_msg'	 => '', // If 'dismissable' is false, this message will be output at top of nag.
		'is_automatic'	 => false, // Automatically activate plugins after installation or not.
		'message'		 => '', // Message to output right before the plugins table.
	);
	tgmpa($plugins, $config);
}
add_action( 'tgmpa_register', 'blackhawk_register_required_plugins' );
