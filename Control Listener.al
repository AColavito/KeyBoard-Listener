controladdin "Listener"
{
    Scripts = './Scripts/shortcut.js';

    RequestedHeight = 1; // Some bug in 2018 prevents this from being 0
    RequestedWidth = 1;
    MaximumHeight = 1;
    MaximumWidth = 1;
    VerticalStretch = false;
    HorizontalStretch = false;

    // The event declarations specify what callbacks could be raised from JavaScript by using the webclient API:

    // The procedure declarations specify what JavaScript methods could be called from AL.
    // In .js code, there should be a global function RegisterKeypress(key)


}