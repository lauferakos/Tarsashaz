using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Tarsashaz.Services;

namespace Tarsashaz
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            services.Configure<FormOptions>(o => {
                o.ValueLengthLimit = int.MaxValue;
                o.MultipartBodyLengthLimit = int.MaxValue;
                o.MemoryBufferThreshold = int.MaxValue;
            });

            services.AddDbContext<DAL.DbContexts.CondominiumDbContext>
                (options => options.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=TarsashazDB;Trusted_Connection=True;"));
            services.AddScoped<DAL.IRepositories.ICondominiumAddressRepository, DAL.Repositories.CondominiumAddressRepository>();
            services.AddScoped<DAL.IRepositories.IFlatAddressRepository, DAL.Repositories.FlatAddressRepository>();
            services.AddScoped<DAL.IRepositories.IProviderAddressRepository, DAL.Repositories.ProviderAddressRepository>();
            services.AddScoped<DAL.IRepositories.ICondominiumBillRepository, DAL.Repositories.CondominiumBillRepository>();
            services.AddScoped<DAL.IRepositories.IFlatBillRepository, DAL.Repositories.FlatBillRepository>();
            services.AddScoped<DAL.IRepositories.IBillDateRepository, DAL.Repositories.BillDateRepository>();
            services.AddScoped<DAL.IRepositories.IProviderRepository, DAL.Repositories.ProviderRepository>();
            services.AddScoped<DAL.IRepositories.IAnnouncementRepository, DAL.Repositories.AnnouncementRepository>();
            services.AddScoped<DAL.IRepositories.ICondominiumRepository, DAL.Repositories.CondominiumRepository>();
            services.AddScoped<DAL.IRepositories.IProblemRepository, DAL.Repositories.ProblemRepository>();
            services.AddScoped<DAL.IRepositories.IFlatRepository, DAL.Repositories.FlatRepository>();
            services.AddScoped<DAL.IRepositories.IFlatBalanceRepository, DAL.Repositories.FlatBalanceRepository>();
            services.AddScoped<DAL.IRepositories.IFlatDataRepository, DAL.Repositories.FlatDataRepository>();
            services.AddScoped<DAL.IRepositories.IBillPictureRepository, DAL.Repositories.BillPictureRepository>();
            services.AddScoped<DAL.IRepositories.IFlatPictureRepository, DAL.Repositories.FlatPictureRepository>();
            services.AddScoped<DAL.IRepositories.IProblemPictureRepository, DAL.Repositories.ProblemPictureRepository>();
            services.AddScoped<DAL.IRepositories.IUserRepository, DAL.Repositories.UserRepository>();

            services.AddTransient<BillService>();
            services.AddControllers().AddNewtonsoftJson(options =>
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
            );

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
