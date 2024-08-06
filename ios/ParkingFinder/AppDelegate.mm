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

    [YMKMapKit setApiKey:@"8d0df3ad-a829-40f7-a8ef-c408a5af1ed7"];
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
