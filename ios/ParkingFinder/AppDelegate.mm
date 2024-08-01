#import "AppDelegate.h"
#import <Firebase.h>
#import <React/RCTBundleURLProvider.h>
#import <YandexMapsMobile/YMKMapKitFactory.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"ParkingFinder";
   if ([FIRApp defaultApp] == nil) {
        [FIRApp configure];
      }

  self.initialProps = @{};


    [YMKMapKit setLocale:@"ru_RU"];
    [YMKMapKit setApiKey:@"API_KEY"];


  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.


  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}



- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
