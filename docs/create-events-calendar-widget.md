---
layout: default
title: Create an Events Calendar Widget
order: 2
---

This page documents the process for creating an events calendar widget to embed in your [WordPress](add-calendar-widget-to-wordpress-page.md), [WCMS](add-calendar-widget-to-wcms-page.md), Drupal or other website.

### Events Calendar Widget Builder

The [UCSC Events Calendar](https://calendar.ucsc.edu/) has a [Widget builder](https://calendar.ucsc.edu/help/widget) that can be accessed at the bottom of the right-hand sidebar.

![Selection_001](https://user-images.githubusercontent.com/1000543/217919948-9735e414-04af-4ddc-b1e0-2991a30b5553.png)

Clicking this link will bring you to the [Widget builder](https://calendar.ucsc.edu/help/widget) page where you will be met with a series of prompts to customize your embed. Customize your widget using this form; however, **_there are a few items to pay special attention to_**.

* The branded UC Santa Cruz templates can be selected under the **Template:** drop down menu.

![widget-template](https://user-images.githubusercontent.com/1000543/217960138-4b63b30c-74ee-464e-b28f-d8a0ae912584.png)

* If you are creating a widget specific to a UC Santa Cruz group, be sure to select your group in the **Groups:** drop down menu.

![widget-groups-dropdown](https://user-images.githubusercontent.com/1000543/217962641-4cd50628-0a84-445c-9587-6cb2aa242598.png)

* **Multiple Groups:** Also note that multiple groups may be selected.

![widget-multiple-gropups](https://user-images.githubusercontent.com/1000543/217963012-777f82fd-2f3f-4812-a49f-e3535d2ce16d.png)

* Be sure the **Include Styles:** box is checked so that UC Santa Cruz's branding styles will be included.

![widget-include-styles](https://user-images.githubusercontent.com/1000543/217963178-fbb0b0fb-4757-4a31-8950-482d3b2f8a66.png)

### Preview Widget

Once you select your options in the Widget Builder form, a good practice is to preview the widget using the **Preview Widget** button at the bottom of the form.

![widget-preview](https://user-images.githubusercontent.com/1000543/217964234-576ced0b-b228-42e0-8111-0f4d70237174.png)

A preview of your widget will open in a new tab.

![widget-preview-template](https://user-images.githubusercontent.com/1000543/217968380-854786e9-3a72-4798-bb66-a0705c1f58b3.png)

### Generate Embed Code

When you are satisfied with your widget preview, click the **Generate Embed Code** button at the bottom of the Widget Builder form.

![widget-generate](https://user-images.githubusercontent.com/1000543/217967956-d4436908-9f79-4182-80d9-4ab09554bf15.png)

And the generated embed code will appear that can be copied and pasted into your website.

![widget-generated-embed](https://user-images.githubusercontent.com/1000543/217968107-26e565aa-4a6e-4a52-879b-745b0676b70d.png)

> [!tip]
> **Remove Localist branding footer**
>
>The default embed code includes Localist branding as a footer:
>
>![widget-localist-branding](https://user-images.githubusercontent.com/1000543/217972038-51f953e2-f995-404b-b923-34e8a15011f4.png)
>
>Prior to copying the embed code, you may remove this branding footer. Select all the code between `<div id="lclst_widget_footer">` and its closing `</div>` and delete it.
>
>![widget-remove-localist](https://user-images.githubusercontent.com/1000543/217972799-fc492cd5-dcfe-4902-b1ed-40fbd80b36ec.png)
>
>Then copy the remaining code.
>
>![widget-copy-embed-code](https://user-images.githubusercontent.com/1000543/218110846-abb2ce23-d425-469e-86c7-567aaabc5571.png)
