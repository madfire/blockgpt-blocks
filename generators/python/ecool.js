// by Ran 2024-09-06
'use strict';

goog.provide('Blockly.Python.ecool');

goog.require('Blockly.Python');

// python code for screenInit
Blockly.Python['microPython_screen_screenInit'] = function(block) {
    Blockly.Python.imports_["lcd"] = "import lcd";
    var code = "lcd.init()\n";
    return code;
};
// python code for screenrotate
Blockly.Python['microPython_screen_screenRotate'] = function(block) {
    Blockly.Python.imports_["lcd"] = "import lcd";
    var rotation = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_UNARY_POSTFIX) || '0';
    // rotation 0-359字符映射为数字0,1,2,3
    rotation = Math.floor(parseInt(rotation) / 90);
    var code = "lcd.rotation(" + rotation + ")\n";
    return code;
};
// python code for screenmirror
Blockly.Python['microPython_screen_screenMirror'] = function(block) {
    Blockly.Python.imports_["lcd"] = "import lcd";
    var mirror = block.getFieldValue('MODE') || '0';
    //返回1,0
    var code = "lcd.mirror(" + mirror + ")\n";
    return code;
};

// python code for screen show, 传递16进制的颜色值，lcd.clear()
Blockly.Python['microPython_screen_screenShow'] = function(block) {
    Blockly.Python.imports_["lcd"] = "import lcd";
    var color = block.getFieldValue('COLOR') || 'RED';
    var code = "lcd.clear(lcd." + color + ")\n";
    return code;
};

// python code for screnn set rgb
Blockly.Python['microPython_screen_screenSet'] = function(block) {
    Blockly.Python.imports_["lcd"] = "import lcd";
    var red = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_UNARY_POSTFIX) || '0';
    var green = Blockly.Python.valueToCode(block, 'G', Blockly.Python.ORDER_UNARY_POSTFIX) || '0';
    var blue = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_UNARY_POSTFIX) || '0';
    var code = "lcd.clear((" + red + "," + green + "," + blue + "))\n";
    return code;
};

// python code for screen show image
Blockly.Python['microPython_screen_screenShowImage'] = function(block) {
    Blockly.Python.imports_["lcd"] = "import lcd";
    var img = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_FUNCTION_CALL) || 'img';
    var code = "lcd.display(" + img + ")\n";
    return code;
};

// python code for screen clear
Blockly.Python['microPython_screen_screenClear'] = function(block) {
    Blockly.Python.imports_["lcd"] = "import lcd";
    var code = "lcd.clear()\n";
    return code;
};

// python code for image init
Blockly.Python['microPython_image_imageInit'] = function(block) {
    Blockly.Python.imports_["imgage"] = "import image";
    var imgvalue = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_FUNCTION_CALL) || 'image.Image()';
    imgvalue = imgvalue.replace(/^'|'$/g, ''); // 去掉首尾的引号
    var code = "img = " + imgvalue + "\n";
    return code;
}


// python code for image
Blockly.Python['microPython_image_image'] = function(block) {
    Blockly.Python.imports_["imgage"] = "import image";
    var code = "img";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// python code for image draw string
Blockly.Python['microPython_image_imageDrawString'] = function(block) {
    Blockly.Python.imports_["imgage"] = "import image";
    var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_FUNCTION_CALL) || '0';
    var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_FUNCTION_CALL) || '0';
    var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_FUNCTION_CALL) || 'text';
    
    var color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_UNARY_POSTFIX) || '0';
    color = color.replace('#', '');
    var r = parseInt(color.substring(0, 2), 16);
    var g = parseInt(color.substring(2, 4), 16);
    var b = parseInt(color.substring(4, 6), 16);
    color = "(" + r + "," + g + "," + b + ")";
    var scale = Blockly.Python.valueToCode(block, 'SIZE', Blockly.Python.ORDER_FUNCTION_CALL) || '0';
    var code = "img.draw_string(" + x + ", " + y + ", str(" + text + "), " + color + ", scale=" + scale + ")\n";
    return code;
};

// python code for image draw rectangle
Blockly.Python['microPython_image_imageDrawRectangle'] = function(block) {
    Blockly.Python.imports_["imgage"] = "import image";
    var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_FUNCTION_CALL) || '0';
    var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_FUNCTION_CALL) || '0';
    var w = Blockly.Python.valueToCode(block, 'W', Blockly.Python.ORDER_FUNCTION_CALL) || '0';
    var h = Blockly.Python.valueToCode(block, 'H', Blockly.Python.ORDER_FUNCTION_CALL) || '0';
    var color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_UNARY_POSTFIX) || '0';
    color = color.replace('#', '');
    var r = parseInt(color.substring(0, 2), 16);
    var g = parseInt(color.substring(2, 4), 16);
    var b = parseInt(color.substring(4, 6), 16);
    color = "(" + r + "," + g + "," + b + ")";
    var fill = block.getFieldValue('FILL') || '0';
    var code = "img.draw_rectangle(" + x + ", " + y + ", " + w + ", " + h + ", " + color + ", fill=" + fill + ")\n";
    return code;
};

// python code for Sensor Init: Format[PIX] Size[SIZE] SkipFrame[SKIPFRAME]
Blockly.Python['microPython_sensor_sensorinit'] = function(block) {
    Blockly.Python.imports_["sensor"] = "import sensor";
    var pix = block.getFieldValue('PIX') || 'sensor.RGB565';
    var size = block.getFieldValue('SIZE') || 'sensor.QVGA';
    var skipFrame = Blockly.Python.valueToCode(block, 'SKIPFRAME', Blockly.Python.ORDER_FUNCTION_CALL) || '100';
    var code = "sensor.reset()\n";
    code += "sensor.set_pixformat(sensor." + pix + ")\n";
    code += "sensor.set_framesize(sensor." + size + ")\n";
    code += "sensor.skip_frames(time=" + skipFrame + ")\n";
    return code;
};
// Python code for sensor snapshot
Blockly.Python['microPython_sensor_snapshot'] = function(block) {
    Blockly.Python.imports_["sensor"] = "import sensor";
    var code = "sensor.snapshot()";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// python code for cosoletimeclock
Blockly.Python['microPython_console_consoleTimeClock'] = function(block) {
    Blockly.Python.imports_["time"] = "import time";
    var code = "clock = time.clock()\n";
    return code;
};
// python code for consolefps
Blockly.Python['microPython_console_consoleFps'] = function(block) {
    Blockly.Python.imports_["time"] = "import time";
    var code = "clock.fps()";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// python code for cosoletimetick
Blockly.Python['microPython_console_consoleTimeTick'] = function(block) {
    Blockly.Python.imports_["time"] = "import time";
    var code = "clock.tick()\n";
    return code;
};


Blockly.Python['microPython_console_consolePrint'] = function(block) {
    var msg = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_FUNCTION_CALL) || '';
    var code = "print(" + msg + ")\n";
    return code;
};

Blockly.Python['microPython_console_consoleExecfile'] = function(block) {
  var msg = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var code = "exec(open(" + msg + ").read())\n";
  return code;
};
// python code for reboot
Blockly.Python['microPython_console_consoleReboot'] = function(block) {
    Blockly.Python.imports_["machine"] = "import machine";
    var code = "machine.reset()\n";
    return code;
}