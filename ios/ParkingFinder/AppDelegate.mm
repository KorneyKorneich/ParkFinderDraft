#import <YandexMapsMobile/YMKMapKitFactory.h>
#import "AppDelegate.h"
#import <Firebase.h>
#import <React/RCTBundleURLProvider.h>


@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"ParkingFinder";
   if ([FIRApp defaultApp] == nil) {
        [FIRApp configure];
      }

  self.initialProps = @{};

    [YMKMapKit setApiKey:@"e3aa0fd7-1107-4862-880b-4b79a4f6c93a"];
    [YMKMapKit setLocale:@"ru_RU"];
    [YMKMapKit mapKit];
    [super application:application didFinishLaunchingWithOptions:launchOptions];

  return YES;
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
