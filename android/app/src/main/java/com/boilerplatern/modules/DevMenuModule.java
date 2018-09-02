package com.boilerplatern.modules;

/**
 * Created by lukaszchludzinski on 30/08/2018.
 */

import com.facebook.react.ReactApplication;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.UiThreadUtil;

import java.util.HashMap;
import java.util.Map;

public class DevMenuModule extends ReactContextBaseJavaModule {

    private static final String TAG = "Dev Menu Module";

    private static final String REACT_AWARE_PARAM_1 = "moduleParam1";
    private static final String REACT_AWARE_PARAM_2 = "moduleParam2";

    private final ReactApplicationContext reactContext;


    public DevMenuModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(REACT_AWARE_PARAM_1, 1);
        constants.put(REACT_AWARE_PARAM_2, 2);
        return constants;
    }

    @Override
    public String getName() {
        return "DevMenu";
    }

    @ReactMethod
    public void show() {
        UiThreadUtil.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                ((ReactApplication) reactContext.getApplicationContext()).getReactNativeHost().getReactInstanceManager().showDevOptionsDialog();
            }
        });
    }
}