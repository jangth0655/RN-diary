#import <RCTAppDelegate.h>
#import <UIKit/UIKit.h>
#import "RNSplashScreen.h"

@interface AppDelegate : RCTAppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    [RNSplashScreen show]; 
    return YES;
}

@end
