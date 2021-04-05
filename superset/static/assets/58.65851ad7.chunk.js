(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/brace/mode/sql.js":
/*!****************************************!*\
  !*** ./node_modules/brace/mode/sql.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/sql_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar SqlHighlightRules = function() {\n\n    var keywords = (\n        \"select|insert|update|delete|from|where|and|or|group|by|order|limit|offset|having|as|case|\" +\n        \"when|else|end|type|left|right|join|on|outer|desc|asc|union|create|table|primary|key|if|\" +\n        \"foreign|not|references|default|null|inner|cross|natural|database|drop|grant\"\n    );\n\n    var builtinConstants = (\n        \"true|false\"\n    );\n\n    var builtinFunctions = (\n        \"avg|count|first|last|max|min|sum|ucase|lcase|mid|len|round|rank|now|format|\" + \n        \"coalesce|ifnull|isnull|nvl\"\n    );\n\n    var dataTypes = (\n        \"int|numeric|decimal|date|varchar|char|bigint|float|double|bit|binary|text|set|timestamp|\" +\n        \"money|real|number|integer\"\n    );\n\n    var keywordMapper = this.createKeywordMapper({\n        \"support.function\": builtinFunctions,\n        \"keyword\": keywords,\n        \"constant.language\": builtinConstants,\n        \"storage.type\": dataTypes\n    }, \"identifier\", true);\n\n    this.$rules = {\n        \"start\" : [ {\n            token : \"comment\",\n            regex : \"--.*$\"\n        },  {\n            token : \"comment\",\n            start : \"/\\\\*\",\n            end : \"\\\\*/\"\n        }, {\n            token : \"string\",           // \" string\n            regex : '\".*?\"'\n        }, {\n            token : \"string\",           // ' string\n            regex : \"'.*?'\"\n        }, {\n            token : \"string\",           // ` string (apache drill)\n            regex : \"`.*?`\"\n        }, {\n            token : \"constant.numeric\", // float\n            regex : \"[+-]?\\\\d+(?:(?:\\\\.\\\\d*)?(?:[eE][+-]?\\\\d+)?)?\\\\b\"\n        }, {\n            token : keywordMapper,\n            regex : \"[a-zA-Z_$][a-zA-Z0-9_$]*\\\\b\"\n        }, {\n            token : \"keyword.operator\",\n            regex : \"\\\\+|\\\\-|\\\\/|\\\\/\\\\/|%|<@>|@>|<@|&|\\\\^|~|<|>|<=|=>|==|!=|<>|=\"\n        }, {\n            token : \"paren.lparen\",\n            regex : \"[\\\\(]\"\n        }, {\n            token : \"paren.rparen\",\n            regex : \"[\\\\)]\"\n        }, {\n            token : \"text\",\n            regex : \"\\\\s+\"\n        } ]\n    };\n    this.normalizeRules();\n};\n\noop.inherits(SqlHighlightRules, TextHighlightRules);\n\nexports.SqlHighlightRules = SqlHighlightRules;\n});\n\nace.define(\"ace/mode/sql\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/sql_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar SqlHighlightRules = acequire(\"./sql_highlight_rules\").SqlHighlightRules;\n\nvar Mode = function() {\n    this.HighlightRules = SqlHighlightRules;\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n\n    this.lineCommentStart = \"--\";\n\n    this.$id = \"ace/mode/sql\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYnJhY2UvbW9kZS9zcWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnJhY2UvbW9kZS9zcWwuanM/ODQyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJhY2UuZGVmaW5lKFwiYWNlL21vZGUvc3FsX2hpZ2hsaWdodF9ydWxlc1wiLFtcInJlcXVpcmVcIixcImV4cG9ydHNcIixcIm1vZHVsZVwiLFwiYWNlL2xpYi9vb3BcIixcImFjZS9tb2RlL3RleHRfaGlnaGxpZ2h0X3J1bGVzXCJdLCBmdW5jdGlvbihhY2VxdWlyZSwgZXhwb3J0cywgbW9kdWxlKSB7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG9vcCA9IGFjZXF1aXJlKFwiLi4vbGliL29vcFwiKTtcbnZhciBUZXh0SGlnaGxpZ2h0UnVsZXMgPSBhY2VxdWlyZShcIi4vdGV4dF9oaWdobGlnaHRfcnVsZXNcIikuVGV4dEhpZ2hsaWdodFJ1bGVzO1xuXG52YXIgU3FsSGlnaGxpZ2h0UnVsZXMgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBrZXl3b3JkcyA9IChcbiAgICAgICAgXCJzZWxlY3R8aW5zZXJ0fHVwZGF0ZXxkZWxldGV8ZnJvbXx3aGVyZXxhbmR8b3J8Z3JvdXB8Ynl8b3JkZXJ8bGltaXR8b2Zmc2V0fGhhdmluZ3xhc3xjYXNlfFwiICtcbiAgICAgICAgXCJ3aGVufGVsc2V8ZW5kfHR5cGV8bGVmdHxyaWdodHxqb2lufG9ufG91dGVyfGRlc2N8YXNjfHVuaW9ufGNyZWF0ZXx0YWJsZXxwcmltYXJ5fGtleXxpZnxcIiArXG4gICAgICAgIFwiZm9yZWlnbnxub3R8cmVmZXJlbmNlc3xkZWZhdWx0fG51bGx8aW5uZXJ8Y3Jvc3N8bmF0dXJhbHxkYXRhYmFzZXxkcm9wfGdyYW50XCJcbiAgICApO1xuXG4gICAgdmFyIGJ1aWx0aW5Db25zdGFudHMgPSAoXG4gICAgICAgIFwidHJ1ZXxmYWxzZVwiXG4gICAgKTtcblxuICAgIHZhciBidWlsdGluRnVuY3Rpb25zID0gKFxuICAgICAgICBcImF2Z3xjb3VudHxmaXJzdHxsYXN0fG1heHxtaW58c3VtfHVjYXNlfGxjYXNlfG1pZHxsZW58cm91bmR8cmFua3xub3d8Zm9ybWF0fFwiICsgXG4gICAgICAgIFwiY29hbGVzY2V8aWZudWxsfGlzbnVsbHxudmxcIlxuICAgICk7XG5cbiAgICB2YXIgZGF0YVR5cGVzID0gKFxuICAgICAgICBcImludHxudW1lcmljfGRlY2ltYWx8ZGF0ZXx2YXJjaGFyfGNoYXJ8YmlnaW50fGZsb2F0fGRvdWJsZXxiaXR8YmluYXJ5fHRleHR8c2V0fHRpbWVzdGFtcHxcIiArXG4gICAgICAgIFwibW9uZXl8cmVhbHxudW1iZXJ8aW50ZWdlclwiXG4gICAgKTtcblxuICAgIHZhciBrZXl3b3JkTWFwcGVyID0gdGhpcy5jcmVhdGVLZXl3b3JkTWFwcGVyKHtcbiAgICAgICAgXCJzdXBwb3J0LmZ1bmN0aW9uXCI6IGJ1aWx0aW5GdW5jdGlvbnMsXG4gICAgICAgIFwia2V5d29yZFwiOiBrZXl3b3JkcyxcbiAgICAgICAgXCJjb25zdGFudC5sYW5ndWFnZVwiOiBidWlsdGluQ29uc3RhbnRzLFxuICAgICAgICBcInN0b3JhZ2UudHlwZVwiOiBkYXRhVHlwZXNcbiAgICB9LCBcImlkZW50aWZpZXJcIiwgdHJ1ZSk7XG5cbiAgICB0aGlzLiRydWxlcyA9IHtcbiAgICAgICAgXCJzdGFydFwiIDogWyB7XG4gICAgICAgICAgICB0b2tlbiA6IFwiY29tbWVudFwiLFxuICAgICAgICAgICAgcmVnZXggOiBcIi0tLiokXCJcbiAgICAgICAgfSwgIHtcbiAgICAgICAgICAgIHRva2VuIDogXCJjb21tZW50XCIsXG4gICAgICAgICAgICBzdGFydCA6IFwiL1xcXFwqXCIsXG4gICAgICAgICAgICBlbmQgOiBcIlxcXFwqL1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRva2VuIDogXCJzdHJpbmdcIiwgICAgICAgICAgIC8vIFwiIHN0cmluZ1xuICAgICAgICAgICAgcmVnZXggOiAnXCIuKj9cIidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdG9rZW4gOiBcInN0cmluZ1wiLCAgICAgICAgICAgLy8gJyBzdHJpbmdcbiAgICAgICAgICAgIHJlZ2V4IDogXCInLio/J1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRva2VuIDogXCJzdHJpbmdcIiwgICAgICAgICAgIC8vIGAgc3RyaW5nIChhcGFjaGUgZHJpbGwpXG4gICAgICAgICAgICByZWdleCA6IFwiYC4qP2BcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0b2tlbiA6IFwiY29uc3RhbnQubnVtZXJpY1wiLCAvLyBmbG9hdFxuICAgICAgICAgICAgcmVnZXggOiBcIlsrLV0/XFxcXGQrKD86KD86XFxcXC5cXFxcZCopPyg/OltlRV1bKy1dP1xcXFxkKyk/KT9cXFxcYlwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRva2VuIDoga2V5d29yZE1hcHBlcixcbiAgICAgICAgICAgIHJlZ2V4IDogXCJbYS16QS1aXyRdW2EtekEtWjAtOV8kXSpcXFxcYlwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRva2VuIDogXCJrZXl3b3JkLm9wZXJhdG9yXCIsXG4gICAgICAgICAgICByZWdleCA6IFwiXFxcXCt8XFxcXC18XFxcXC98XFxcXC9cXFxcL3wlfDxAPnxAPnw8QHwmfFxcXFxefH58PHw+fDw9fD0+fD09fCE9fDw+fD1cIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0b2tlbiA6IFwicGFyZW4ubHBhcmVuXCIsXG4gICAgICAgICAgICByZWdleCA6IFwiW1xcXFwoXVwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRva2VuIDogXCJwYXJlbi5ycGFyZW5cIixcbiAgICAgICAgICAgIHJlZ2V4IDogXCJbXFxcXCldXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdG9rZW4gOiBcInRleHRcIixcbiAgICAgICAgICAgIHJlZ2V4IDogXCJcXFxccytcIlxuICAgICAgICB9IF1cbiAgICB9O1xuICAgIHRoaXMubm9ybWFsaXplUnVsZXMoKTtcbn07XG5cbm9vcC5pbmhlcml0cyhTcWxIaWdobGlnaHRSdWxlcywgVGV4dEhpZ2hsaWdodFJ1bGVzKTtcblxuZXhwb3J0cy5TcWxIaWdobGlnaHRSdWxlcyA9IFNxbEhpZ2hsaWdodFJ1bGVzO1xufSk7XG5cbmFjZS5kZWZpbmUoXCJhY2UvbW9kZS9zcWxcIixbXCJyZXF1aXJlXCIsXCJleHBvcnRzXCIsXCJtb2R1bGVcIixcImFjZS9saWIvb29wXCIsXCJhY2UvbW9kZS90ZXh0XCIsXCJhY2UvbW9kZS9zcWxfaGlnaGxpZ2h0X3J1bGVzXCJdLCBmdW5jdGlvbihhY2VxdWlyZSwgZXhwb3J0cywgbW9kdWxlKSB7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG9vcCA9IGFjZXF1aXJlKFwiLi4vbGliL29vcFwiKTtcbnZhciBUZXh0TW9kZSA9IGFjZXF1aXJlKFwiLi90ZXh0XCIpLk1vZGU7XG52YXIgU3FsSGlnaGxpZ2h0UnVsZXMgPSBhY2VxdWlyZShcIi4vc3FsX2hpZ2hsaWdodF9ydWxlc1wiKS5TcWxIaWdobGlnaHRSdWxlcztcblxudmFyIE1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLkhpZ2hsaWdodFJ1bGVzID0gU3FsSGlnaGxpZ2h0UnVsZXM7XG4gICAgdGhpcy4kYmVoYXZpb3VyID0gdGhpcy4kZGVmYXVsdEJlaGF2aW91cjtcbn07XG5vb3AuaW5oZXJpdHMoTW9kZSwgVGV4dE1vZGUpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmxpbmVDb21tZW50U3RhcnQgPSBcIi0tXCI7XG5cbiAgICB0aGlzLiRpZCA9IFwiYWNlL21vZGUvc3FsXCI7XG59KS5jYWxsKE1vZGUucHJvdG90eXBlKTtcblxuZXhwb3J0cy5Nb2RlID0gTW9kZTtcblxufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/brace/mode/sql.js\n");

/***/ })

}]);