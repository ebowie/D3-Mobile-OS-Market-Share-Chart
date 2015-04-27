/*
This is a open source toast message library 
that will display toast messages.

I have add my own code in it to create toast message for
each circle and to place the toast message at each circle position and match it circle

None of the existing code was change.

You should be able to tell which is my code by the comments i have left.

*/
; (function (define) {
	define(['jquery'], function ($) {
		return (function () {
			var $container;
			var listener;
			var toastId = 0;
			var toastType = {
				error: 'error',
				info: 'info',
				success: 'success',
				warning: 'warning',


				////////////////////////////////////////////////////////////////////////////////////////////////
				
				//My Code Down below
				//creating toast message for each circle
				///////////////////////////////////////////////////////////////////////////////////////////////
				IOS: 'IOS',
				Android: 'Android',
				Symbian: 'Symbian',
				BlackBerry: 'BlackBerry',
				Sony: 'Sony',
				Samsung: 'Samsung',
				Unknown: 'Unknown',
				Other: 'Other',
				PlayStation: 'PlayStation'
				////////////////////////////////////////////////////////////////////////////////////////////////
				// My Code Up above

				///////////////////////////////////////////////////////////////////////////////////////////////
			};

			var toastr = {
				clear: clear,
				remove: remove,
				error: error,
				getContainer: getContainer,
				info: info,
				options: {},
				subscribe: subscribe,
				success: success,
				version: '2.1.0',
				warning: warning,
				////////////////////////////////////////////////////////////////////////////////////////////////

				//My Code Down below
				//creating toast message for each circle
				///////////////////////////////////////////////////////////////////////////////////////////////
				IOS: IOS,
				Android: Android,
				Symbian: Symbian,
				BlackBerry: BlackBerry,
				Sony: Sony,
				Samsung: Samsung,
				Unknown: Unknown,
				Other: Other,
				PlayStation: PlayStation
				////////////////////////////////////////////////////////////////////////////////////////////////
				// My Code Up above

				///////////////////////////////////////////////////////////////////////////////////////////////

			};

			var previousToast;

			return toastr;

			//#region Accessible Methods
			function error(message, title, optionsOverride) {
				return notify({
					type: toastType.error,
					iconClass: getOptions().iconClasses.error,
					message: message,
					optionsOverride: optionsOverride,
					title: title
				});
			}

			function getContainer(options, create) {
				if (!options) { options = getOptions(); }
				$container = $('#' + options.containerId);
				if ($container.length) {
					return $container;
				}
				if (create) {
					$container = createContainer(options);
				}
				return $container;
			}

			function info(message, title, optionsOverride) {
				return notify({
					type: toastType.info,
					iconClass: getOptions().iconClasses.info,
					message: message,
					optionsOverride: optionsOverride,
					title: title
				});
			}

			function subscribe(callback) {
				listener = callback;
			}

			function success(message, title, optionsOverride) {
				return notify({
					type: toastType.success,
					iconClass: getOptions().iconClasses.success,
					message: message,
					optionsOverride: optionsOverride,
					title: title
				});
			}
			////////////////////////////////////////////////////////////////////////////////////////////////
			// My Code Down Below
			//creating toast message for each circle
			///////////////////////////////////////////////////////////////////////////////////////////////
			function IOS(message, title, optionsOverride) {
				return notify({
					type: toastType.IOS,
					iconClass: getOptions().iconClasses.IOS,
					message: message,
					optionsOverride: optionsOverride,
					title: title
				});
			}
			 function Android(message, title, optionsOverride) {
				return notify({
					type: toastType.Android,
					iconClass: getOptions().iconClasses.Android,
					message: message,
					optionsOverride: optionsOverride,
					title: title
				});
			}
			 function Symbian(message, title, optionsOverride) {
				return notify({
					type: toastType.Symbian,
					iconClass: getOptions().iconClasses.Symbian,
					message: message,
					optionsOverride: optionsOverride,
					title: title
				});
			}
			function BlackBerry(message, title, optionsOverride) {
				return notify({
					type: toastType.BlackBerry,
					iconClass: getOptions().iconClasses.BlackBerry,
					message: message,
					optionsOverride: optionsOverride,
					title: title
				});
			}
			function Sony(message, title, optionsOverride) {
				return notify({
					type: toastType.Sony,
					iconClass: getOptions().iconClasses.Sony,
					message: message,
					optionsOverride: optionsOverride,
					title: title
				});
			}
			function Samsung(message, title, optionsOverride) {
				return notify({
					type: toastType.Samsung,
					iconClass: getOptions().iconClasses.Samsung,
					message: message,
					optionsOverride: optionsOverride,
					title: title
				});
			}
			function Unknown(message, title, optionsOverride) {
				return notify({
					type: toastType.Unknown,
					iconClass: getOptions().iconClasses.Unknown,
					message: message,
					optionsOverride: optionsOverride,
					title: title
				});
			}
			function Other(message, title, optionsOverride) {
				return notify({
					type: toastType.Other,
					iconClass: getOptions().iconClasses.Other,
					message: message,
					optionsOverride: optionsOverride,
					title: title
				});
			}
			function PlayStation(message, title, optionsOverride) {
				return notify({
					type: toastType.PlayStation,
					iconClass: getOptions().iconClasses.PlayStation,
					message: message,
					optionsOverride: optionsOverride,
					title: title
				});
			}
		///////////////////////////////////////////////////////////////////////////////////////////////
		// My Code Up above
		///////////////////////////////////////////////////////////////////////////////////////////////


			function warning(message, title, optionsOverride) {
				return notify({
					type: toastType.warning,
					iconClass: getOptions().iconClasses.warning,
					message: message,
					optionsOverride: optionsOverride,
					title: title
				});
			}

			function clear($toastElement) {
				var options = getOptions();
				if (!$container) { getContainer(options); }
				if (!clearToast($toastElement, options)) {
					clearContainer(options);
				}
			}

			function remove($toastElement) {
				var options = getOptions();
				if (!$container) { getContainer(options); }
				if ($toastElement && $(':focus', $toastElement).length === 0) {
					removeToast($toastElement);
					return;
				}
				if ($container.children().length) {
					$container.remove();
				}
			}
			//#endregion

			//#region Internal Methods

			function clearContainer (options) {
				var toastsToClear = $container.children();
				for (var i = toastsToClear.length - 1; i >= 0; i--) {
					clearToast($(toastsToClear[i]), options);
				}
			}

			function clearToast ($toastElement, options) {
				if ($toastElement && $(':focus', $toastElement).length === 0) {
					$toastElement[options.hideMethod]({
						duration: options.hideDuration,
						easing: options.hideEasing,
						complete: function () { removeToast($toastElement); }
					});
					return true;
				}
				return false;
			}

			function createContainer(options) {
				$container = $('<div/>')
					.attr('id', options.containerId)
					.addClass(options.positionClass)
					.attr('aria-live', 'polite')
					.attr('role', 'alert');

				$container.appendTo($(options.target));
				return $container;
			}

			function getDefaults() {
				return {
					tapToDismiss: true,
					toastClass: 'toast',
					containerId: 'toast-container',
					debug: false,

					showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
					showDuration: 300,
					showEasing: 'swing', //swing and linear are built into jQuery
					onShown: undefined,
					hideMethod: 'fadeOut',
					hideDuration: 1000,
					hideEasing: 'swing',
					onHidden: undefined,

					extendedTimeOut: 1000,
					iconClasses: {
						error: 'toast-error',
						info: 'toast-info',
						
						success: 'toast-success',
						warning: 'toast-warning',
						////////////////////////////////////////////////////////////////////////////////////////////////
						// My Code Down Below
						//creating toast message for each circle
						///////////////////////////////////////////////////////////////////////////////////////////////
						IOS: 'toast-IOS',
						Android: 'toast-Android',
						Symbian: 'toast-Symbian',
						BlackBerry: 'toast-BlackBerry',
						Sony: 'toast-Sony',
						Samsung: 'toast-Samsung',
						Unknown: 'toast-Unknown',
						Other: 'toast-Other',
						PlayStation: 'toast-PlayStation'
						////////////////////////////////////////////////////////////////////////////////////////////////
						//  My Code Up above

						///////////////////////////////////////////////////////////////////////////////////////////////

					},
					iconClass: 'toast-info',
					positionClass: 'toast-top-right',
					timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
					titleClass: 'toast-title',
					messageClass: 'toast-message',
					target: 'body',
					closeHtml: '<button type="button">&times;</button>',
					newestOnTop: true,
					preventDuplicates: false,
					progressBar: false
				};
			}

			function publish(args) {
				if (!listener) { return; }
				listener(args);
			}

			function notify(map) {
				var options = getOptions(),
					iconClass = map.iconClass || options.iconClass;

				if (typeof (map.optionsOverride) !== 'undefined') {
					options = $.extend(options, map.optionsOverride);
					iconClass = map.optionsOverride.iconClass || iconClass;
				}
				
				if (options.preventDuplicates) {
					if (map.message === previousToast) {
						return;
					} else {
						previousToast = map.message;
					}
				}

				toastId++;

				$container = getContainer(options, true);
				var intervalId = null,
					$toastElement = $('<div/>'),
					$titleElement = $('<div/>'),
					$messageElement = $('<div/>'),
					$progressElement = $('<div/>'),
					$closeElement = $(options.closeHtml),
					progressBar = {
						intervalId: null,
						hideEta: null,
						maxHideTime: null
					},
					response = {
						toastId: toastId,
						state: 'visible',
						startTime: new Date(),
						options: options,
						map: map
					};

				if (map.iconClass) {
					$toastElement.addClass(options.toastClass).addClass(iconClass);
				}

				if (map.title) {
					$titleElement.append(map.title).addClass(options.titleClass);
					$toastElement.append($titleElement);
				}

				if (map.message) {
					$messageElement.append(map.message).addClass(options.messageClass);
					$toastElement.append($messageElement);
				}

				if (options.closeButton) {
					$closeElement.addClass('toast-close-button').attr('role', 'button');
					$toastElement.prepend($closeElement);
				}

				if (options.progressBar) {
					$progressElement.addClass('toast-progress');
					$toastElement.prepend($progressElement);
				}

				$toastElement.hide();
				if (options.newestOnTop) {
					$container.prepend($toastElement);
				} else {
					$container.append($toastElement);
				}
				$toastElement[options.showMethod](
					{duration: options.showDuration, easing: options.showEasing, complete: options.onShown}
				);

				if (options.timeOut > 0) {
					intervalId = setTimeout(hideToast, options.timeOut);
					progressBar.maxHideTime = parseFloat(options.timeOut);
					progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
					if (options.progressBar) {
						progressBar.intervalId = setInterval(updateProgress, 10);
					}
				}

				$toastElement.hover(stickAround, delayedHideToast);
				if (!options.onclick && options.tapToDismiss) {
					$toastElement.click(hideToast);
				}

				if (options.closeButton && $closeElement) {
					$closeElement.click(function (event) {
						if (event.stopPropagation) {
							event.stopPropagation();
						} else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
							event.cancelBubble = true;
						}
						hideToast(true);
					});
				}

				if (options.onclick) {
					$toastElement.click(function () {
						options.onclick();
						hideToast();
					});
				}

				publish(response);

				if (options.debug && console) {
					console.log(response);
				}

				return $toastElement;

				function hideToast(override) {
					if ($(':focus', $toastElement).length && !override) {
						return;
					}
					clearTimeout(progressBar.intervalId);
					return $toastElement[options.hideMethod]({
						duration: options.hideDuration,
						easing: options.hideEasing,
						complete: function () {
							removeToast($toastElement);
							if (options.onHidden && response.state !== 'hidden') {
								options.onHidden();
							}
							response.state = 'hidden';
							response.endTime = new Date();
							publish(response);
						}
					});
				}

				function delayedHideToast() {
					if (options.timeOut > 0 || options.extendedTimeOut > 0) {
						intervalId = setTimeout(hideToast, options.extendedTimeOut);
						progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
						progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
					}
				}

				function stickAround() {
					clearTimeout(intervalId);
					progressBar.hideEta = 0;
					$toastElement.stop(true, true)[options.showMethod](
						{duration: options.showDuration, easing: options.showEasing}
					);
				}

				function updateProgress() {
					var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100;
					$progressElement.width(percentage + '%');
				}
			}

			function getOptions() {
				return $.extend({}, getDefaults(), toastr.options);
			}

			function removeToast($toastElement) {
				if (!$container) { $container = getContainer(); }
				if ($toastElement.is(':visible')) {
					return;
				}
				$toastElement.remove();
				$toastElement = null;
				if ($container.children().length === 0) {
					$container.remove();
					previousToast = undefined;
				}
			}
			//#endregion

		})();
	});
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
	if (typeof module !== 'undefined' && module.exports) { //Node
		module.exports = factory(require('jquery'));
	} else {
		window['toastr'] = factory(window['jQuery']);
	}
}));
