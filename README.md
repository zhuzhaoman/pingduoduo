### angular入门一之环境安装及项目创建



#### 1.安装node.js

- 下载，安装，在终端测试安装是否成功：**node -v**(查看nodejs版本)    **npm -v**(查看npm版本)

- 下载地址：https://nodejs.org/en/download

  


#### 2.安装angular cli

- 安装typescript（新建项目的时候会自动安装，此时也可以不进行安装）：
      **npm install -g typescript**

- 安装angular cli ：
      **npm install -g @angular/cli**        

- 验证：
      **ng version** 出现版本信息即安装成功。        

- 注意：由于安装需要访问外网，速度可能慢导致失败，可以从淘宝镜像来进行安装
      **npm config set registry https://registry.npm.taobao.org**  
      再安装cnpm代替npm命令：**npm install -g cnpm**
      再安装**angular cli：cnpm install -g @angular/cli**     

​     

#### 3.创建新项目：

- 在终端中，进入想要创建项目的地址执行 :**ng new 项目名称**

- 执行完该命令后会下载相应的npm包，耐心等待

- 注意：执行ng new first-app后会有一段提示说【'git' 不是内部或外部命令，也不是可
      运行的程序或批处理文件。】，这个和本地没有安装git有关，但是不会影响项目。

  

#### 4.运行项目：

- 在终端中进入项目所在文件夹:cd first-app;

- 然后执行ng serve，服务启动了，访问http://http:localhost:4200，能访问到即项目搭建成功。
      **ctrl+c**命令退出指定状态，可以关闭服务(很多命令和linux下的较为相似)

  

#### 5.至此，一个angular项目就可以跑起来了。



#### 6.创建组件

- 生成组件到app目录下：

  ```
  ng g c ScrollableTab(组件名称)
  ```

- 生成组件到指定目录下：

  ```
  ng g c components/ScrollableTab(组件名称)
  ```

  

#### 7.组件的生命周期

- constructor：构造函数永远首先被调用
- ngOnChanges：输入属性变化时被调用
- ngOnInit：组件初始化时被调用
- ngDoCheck：脏值检测时调用
- ngAfterContentInit：当内容投影ng-content完成时调用
- ngAfterContentChecked：Angular检测投影内容时调用（多次）
- ngAfterViewInit：当组件视图（子视图）初始化完成时
- ngAfterViewChecked：当检测视图变化（多次）
- ngOnDestroy：当组件销毁时

