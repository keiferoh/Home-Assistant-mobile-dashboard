export const THEMES = {
  'ranch_with_three_stall_garage': {
    'house': 'house.png',
    'overlay_actions': {
      '*': {
        'tap_action': {
          'action': 'toggle',
        },
        'hold_action': {
          'action': 'more-info',
        },
      },
      'car': {
        'tap_action': {
          'action': 'none',
        },
      },
      'garage': {
        'tap_action': {
          'action': 'none',
        },
      },
      'car2': {
        'tap_action': {
          'action': 'none',
        },
      },
      'mail': {
        'tap_action': {
          'action': 'none',
        },
      },
      'amazon-delivering': {
       'tap_action': {
         'action': 'none',
        },
      },
      'fedex-delivering': {
       'tap_action': {
         'action': 'none',
        },
      },
      'ups-delivering': {
       'tap_action': {
         'action': 'none',
        },
      },
      'amazon-delivered': {
       'tap_action': {
         'action': 'none',
        },
      },
      'fedex-delivered': {
       'tap_action': {
         'action': 'none',
        },
      },
      'ups-delivered': {
       'tap_action': {
         'action': 'none',
        },
      },
      'flag': {
        'tap_action': {
          'action': 'none',
        },
      },
      'sprinkler': {
        'tap_action': {
          'action': 'more-info',
        },
      },
    },
    'overlays': {
      'door': {
        'on': [
          {
            'image': 'door-close.png',
            'style': { 'width': '5.8%', 'left': '32.15%', 'top': '61.25%', 'z-index': '10'},
          }
        ],
        'off': [
          {
            'image': 'door-open.png',
            'style': { 'width': '5.8%', 'left': '32.15%', 'top': '61.25%', 'z-index': '10'},
          },
        ],
      },
      'flag': {
        'on': [
          {
            'image': 'flag.gif',
            'style': { 'width': '8%', 'left': '50.1%', 'top': '44.5%', 'z-index': '20'},
          },
          {
            'image': 'flagpole.png',
            'style': { 'width': '.8%', 'left': '46.5%', 'top': '58%', 'z-index': '21'},
          },
        ],
        'off': [
          {
            'image': 'flag.gif',
            'style': { 'width': '8%', 'left': '50.1%', 'top': '44.5%', 'z-index': '20'},
          },
          {
            'image': 'flagpole.png',
            'style': { 'width': '.8%', 'left': '46.5%', 'top': '58%', 'z-index': '21'},
          },
        ],
      },
      'garage': {
        'open': [
          {
            'image': 'garage-open.png',
            'style': { 'width': '23%', 'height': '34%', 'left': '60.90%', 'top': '57.5%', 'z-index': '10' },
          },
          {
            'image': 'car.png',
            'style': { 'width': '10.25%', 'left': '67.5%', 'top': '76.5%', 'z-index': '10' },
          },
        ],
        'closed': [
          {
          'image': 'garage-close.png',
          'style': { 'width': '23%', 'height': '34%', 'left': '60.90%', 'top': '57.5%', 'z-index': '10' },
          },
        ],
      },
      'garage2': {
        'on': [
		  {
            'image': 'downstairs-window-light.png',
            'style': { 'width': '4.5%', 'left': '85.5%', 'top': '53.6%', 'z-index': '10' },
          },
		  {
            'image': 'downstairs-window-light.png',
            'style': { 'width': '4.5%', 'left': '81.5%', 'top': '53.6%', 'z-index': '10' },
          }
        ],
        'off': [
		  {
            'image': 'downstairs-window-dark.png',
            'style': { 'width': '4.5%', 'left': '85.5%', 'top': '53.6%', 'z-index': '10' },
          },
		  {
            'image': 'downstairs-window-dark.png',
            'style': { 'width': '4.5%', 'left': '81.0%', 'top': '53.6%', 'z-index': '10' },
          },
        ],
      },
      'outside_light': {
        'on': [
          {
            'image': 'outside-light-on.png',
            'style': { 'width': '6%', 'left': '12.3%', 'top': '70.5%', 'z-index': '10' },
          },
          {
            'image': 'outside-light-on.png',
            'style': { 'width': '6%', 'left': '21.2%', 'top': '70.5%', 'z-index': '10' },
          },
          {
            'image': 'outside-light-on.png',
            'style': { 'width': '6%', 'left': '42.8%', 'top': '70.5%', 'z-index': '10' },
          },
          {
            'image': 'outside-lamp-on.png',
            'style': { 'width': '1.4%', 'left': '48.20%', 'top': '48.0%', 'z-index': '10' },
          },
          {
            'image': 'outside-lamp-on.png',
            'style': { 'width': '1.4%', 'left': '27.35%', 'top': '48.0%', 'z-index': '10' },
          },
          {
            'image': 'outside-lamp-on.png',
            'style': { 'width': '1.4%', 'left': '73.65%', 'top': '48.0%', 'z-index': '10' },
          },
        ],
        'off': [
          {
            'image': 'outside-light-off.png',
            'style': { 'width': '6%', 'left': '12.3%', 'top': '70.5%', 'z-index': '10' },
          },
          {
            'image': 'outside-light-off.png',
            'style': { 'width': '6%', 'left': '21.2%', 'top': '70.5%', 'z-index': '10' },
          },
          {
            'image': 'outside-light-off.png',
            'style': { 'width': '6%', 'left': '42.8%', 'top': '70.5%', 'z-index': '10' },
          },
          {
            'image': 'outside-lamp-gray-off.png',
            'style': { 'width': '1.4%', 'left': '48.20%', 'top': '48.0%', 'z-index': '10' },
          },
          {
            'image': 'outside-lamp-door-off.png',
            'style': { 'width': '1.4%', 'left': '27.35%', 'top': '48.0%', 'z-index': '10' },
          },
          {
            'image': 'outside-lamp-gray-off.png',
            'style': { 'width': '1.4%', 'left': '73.65%', 'top': '48.0%', 'z-index': '10' },
          },
        ],
      },
      'upstairs_light': {
        'on': [
          {
            'image': 'downstairs-window-light.png',
            'style': { 'width': '4.5%', 'left': '42.3%', 'top': '53.6%', 'z-index': '10' },
          },
        ],
        'off': [
          {
            'image': 'downstairs-window-dark.png',
            'style': { 'width': '4.5%', 'left': '42.3%', 'top': '53.6%', 'z-index': '10' },
          },
        ]
      },
      'office_light': {
        'on': [
          {
            'image': 'downstairs-window-light.png',
            'style': { 'width': '4.5%', 'left': '21.2%', 'top': '53.6%', 'z-index': '10' },
          },
        ],
        'off': [
          {
            'image': 'downstairs-window-dark.png',
            'style': { 'width': '4.5%', 'left': '21.2%', 'top': '53.6%', 'z-index': '10' },
          },
        ]
      },
      'downstairs_light': {
        'on': [
          {
            'image': 'window-light.png',
            'style': { 'width': '4.5%', 'left': '12.3%', 'top': '53.6%', 'z-index': '10' },
          },
        ],
        'off': [
          {
            'image': 'window-dark.png',
            'style': { 'width': '4.5%', 'left': '12.3%', 'top': '53.6%', 'z-index': '10' },
          },
        ]
      },
      'car': {
        'home': [
          {
            'image': 'car.png',
            'style': { 'width': '11%', 'left': '67%', 'top': '75%', 'z-index': '10' },
          },
        ],
      },
      'car2': {
        'home': [
          {
            'image': 'car2.png',
            'style': { 'width': '11.25%', 'left': '54.0%', 'top': '75%', 'z-index': '95' },
          },
        ],
      },
      'mail': {
        'on': [
          {
            'image': 'mail.png',
            'style': { 'width': '3%', 'left': '44%', 'top': '79%', 'z-index': '95' },
          },
        ],
      },
      'amazon-delivered': {
        'on': [
          {
            'image': 'amazon.png',
            'style': { 'width': '5%', 'left': '32.0%', 'top': '74%', 'z-index': '100' },
          },
        ],
      },
      'fedex-delivered': {
        'on': [
          {
            'image': 'fedex.png',
            'style': { 'width': '5%', 'left': '27%', 'top': '75%', 'z-index': '100' },
          },
        ],
      },
      'ups-delivered': {
        'on': [
          {
            'image': 'ups.png',
            'style': { 'width': '4%', 'left': '37.0%', 'top': '75%', 'z-index': '100' },
          },
        ],
      },
      'amazon-delivering': {
        'on': [
          {
            'image': 'amazon-delivered.png',
            'style': { 'width': '30%', 'left': '87.0%', 'top': '87%', 'z-index': '98' },
          },
        ],
      },
      'fedex-delivering': {
        'on': [
          {
            'image': 'fedex-delivered.png',
            'style': { 'width': '30%', 'left': '87%', 'top': '87%', 'z-index': '99' },
          },
        ],
      },
      'ups-delivering': {
        'on': [
          {
            'image': 'ups-delivered.png',
            'style': { 'width': '30%', 'left': '87%', 'top': '87%', 'z-index': '100' },
          },
        ],
      },
      'sprinkler': {
        'on': [
          {
            'image': 'outside-light-on.png',
            'style': { 'width': '6.0%', 'left': '85.5.0%', 'top': '70.5%', 'z-index': '10' },
          },
          {
            'image': 'outside-light-on.png',
            'style': { 'width': '6.0%', 'left': '81.5%', 'top': '70.5%', 'z-index': '10' },
          },
        ],
        'off': [
          {
            'image': 'outside-light-off.png',
            'style': { 'width': '6.0%', 'left': '85.5%', 'top': '70.5%', 'z-index': '10' },
          },
          {
            'image': 'outside-light-off.png',
            'style': { 'width': '6.0%', 'left': '81.5%', 'top': '70.5%', 'z-index': '10' },
          },
        ],
      },
    },
  },
};
