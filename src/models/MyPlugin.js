import {
  DefaultPlugin,
  DefaultData,
} from 'leto-modelizer-plugin-core';
import MyPluginDrawer from 'src/draw/MyPluginDrawer';
import MyPluginMetadata from 'src/metadata/MyPluginMetadata';
import MyPluginParser from 'src/parser/MyPluginParser';
import MyPluginRenderer from 'src/render/MyPluginRenderer';
import { name, version } from 'package.json';

/**
 * Template of plugin model.
 */
class MyPlugin extends DefaultPlugin {
  /**
   * Default constructor.
   */
  constructor() {
    const pluginData = new DefaultData({
      name,
      version,
    });

    super({
      pluginData,
      pluginDrawer: new MyPluginDrawer(pluginData),
      pluginMetadata: new MyPluginMetadata(pluginData),
      pluginParser: new MyPluginParser(pluginData),
      pluginRenderer: new MyPluginRenderer(pluginData),
    });
  }
}

export default MyPlugin;
